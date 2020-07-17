import {
  Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { ZipDialogComponent } from './zip-dialog/zip-dialog.component';
import { PantiesService } from './services/panties.service';
import { Converter } from './converters';

/**
 * 変換オプション
 */
interface Option {
  name: string;
  description: string;
  value: boolean;
}

@Component({
  selector: 'qpp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  panties$: Observable<string[]>;
  allPanties$: Observable<string[]>;

  converters: Converter[];

  pantySize: 'small' | 'medium' | 'large' | 'original' = 'medium';

  path: string;
  model: Converter;

  @ViewChild('list', {static: true})
  pantyList: ElementRef<HTMLDivElement>;

  @ViewChildren('pantycard')
  pantycards: QueryList<ElementRef<HTMLDivElement>>;

  /**
   * 似たパンツの検索を行っている対象のパンツ: nullは検索を行っていない
   */
  suggesting: string = null;

  /**
   * 選択中のモデルの変換オプション: nullはAPIから取得中
   */
  options: Option[] = [];

  constructor(
    private dialog: MatDialog,
    public pantiesService: PantiesService,
  ) {
  }

  ngOnInit(): void {
    this.allPanties$ = this.pantiesService.getPanties();
    this.panties$ = this.allPanties$;
    this.pantiesService.getConverters().subscribe(converters => {
      this.converters = converters;
    });
  }

  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent, {
      disableClose: true,
    });
  }

  openZipDialog(): void {
    this.dialog.open(ZipDialogComponent, {
      disableClose: true,
    });
  }

  doPantieGacha(): void {
    this.allPanties$.subscribe(panties => {
      const rand = window.crypto.getRandomValues(new Uint32Array(1))[0];
      const randZeroToOne = rand / (4294967295 + 1);  // UINT32_MAX+1で割るので[0, 1)
      this.path = panties[Math.floor(randZeroToOne * panties.length)];
      this.focusCurrentPanty();
    });
  }

  /**
   * 選択している変換先モデルで有効なオプション一覧を取得
   */
  updateOptions(): void {
    this.options = null;
    this.pantiesService.getModelOptions(this.model.modelName).subscribe(modelOptions => {
      this.options = Object.entries(modelOptions).map((e) => {
        return {
          name: e[0],
          description: e[1].description,
          value: e[1].defaultValue,
        };
      });
    });
  }

  execute(): void {
    // 現在選択中のモデルで有効なオプションキーのみを抽出
    const options = {};
    this.options.forEach(option => {
      options[option.name] = option.value;
    });

    this.dialog.open(ResultDialogComponent, {
      disableClose: true,
      data: {
        filename: this.path,
        url: this.pantiesService.convertedPantyUrl(this.model.modelName, this.path, options),
      }
    });
  }

  /**
   * 似ているパンツの検索APIを呼び出してパンツ一覧を更新する
   */
  getSuggestions(): void {
    this.suggesting = this.path;
    // 1番目に検索対象のパンツを表示する
    this.panties$ = this.pantiesService.getSuggestions(this.suggesting).pipe(map(panties => {
      return [this.suggesting].concat(panties);
    }));
  }

  /**
   * 似ているパンツの表示を解除する
   */
  clearSuggestions(): void {
    this.suggesting = null;
    this.panties$ = this.allPanties$;
  }

  /**
   * 現在選択しているパンツが表示範囲内に入るようにスクロールする
   */
  focusCurrentPanty(): void {
    // 選択中の要素を取得
    const current = this.pantycards.find(elm => elm.nativeElement.dataset.path === this.path);
    if (!current) {
      return;
    }

    // スクロール
    const listTop = this.pantyList.nativeElement.getBoundingClientRect().top;
    const targetTop = current.nativeElement.getBoundingClientRect().top;
    this.pantyList.nativeElement.scrollBy(0, targetTop - listTop - 81);
  }

}
