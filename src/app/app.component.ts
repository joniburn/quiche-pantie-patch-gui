import {
  Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { PantiesService } from './services/panties.service';
import { Converter } from './converters';
import { ConverterOption, OPTION_DESCRIPTIONS } from './options';

@Component({
  selector: 'qpp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  panties$: Observable<string[]>;
  allPanties$: Observable<string[]>;

  convertersList: [string, Converter][];
  convertersMap: {[key: string]: Converter};

  pantySize: 'small' | 'medium' | 'large' | 'original' = 'medium';

  path: string;
  model: [string, Converter];

  @ViewChild('list', {static: true})
  pantyList: ElementRef<HTMLDivElement>;

  @ViewChildren('pantycard')
  pantycards: QueryList<ElementRef<HTMLDivElement>>;

  /**
   * 似たパンツの検索を行っている対象のパンツ
   */
  suggesting: string = null;

  /**
   * 変換オプション
   */
  options: ConverterOption = {
    // 以下はwebapp.jsonで定義された初期値より
    with_bra: true,
    is_lace: false,
    dis_ribbon: false,
    dis_shading: false,
    dis_decoration: false,
    dis_texturing: false,
    add_sign: false,
    stitch_correction: false,
    is_frill: false,
    use_ribbon_mesh: false,
  };
  optionKeys = Object.keys(this.options);
  optionDesc = OPTION_DESCRIPTIONS;

  /**
   * 現在選択中の変換先モデルで有効なオプションキー
   */
  enabledOptionKeys: {[key: string]: boolean};

  constructor(
    private dialog: MatDialog,
    public pantiesService: PantiesService,
  ) {
  }

  ngOnInit() {
    this.allPanties$ = this.pantiesService.getPanties();
    this.panties$ = this.allPanties$;
    this.pantiesService.getConverters().subscribe(mapping => {
      this.convertersMap = mapping;
      this.convertersList = Object.entries(mapping);
    });
  }

  openInfoDialog() {
    this.dialog.open(InfoDialogComponent, {
      disableClose: true,
    });
  }

  /**
   * 選択している変換先モデルで有効なオプションキーを取得
   */
  updateEnabledOptionKeys() {
    this.enabledOptionKeys = {};
    this.convertersMap[this.model[0]].options.forEach(optionKey => {
      this.enabledOptionKeys[optionKey] = true;
    });
  }

  execute() {
    // 現在選択中のモデルで有効なオプションキーのみを抽出
    const options = {};
    this.model[1].options.forEach(key => {
      options[key] = this.options[key];
    });

    this.dialog.open(ResultDialogComponent, {
      disableClose: true,
      data: {
        filename: this.path,
        url: this.pantiesService.convertedPantyUrl(this.model[0], this.path, options),
      }
    });
  }

  /**
   * 似ているパンツの検索APIを呼び出してパンツ一覧を更新する
   */
  getSuggestions() {
    this.suggesting = this.path;
    // 1番目に検索対象のパンツを表示する
    this.panties$ = this.pantiesService.getSuggestions(this.suggesting).pipe(map(panties => {
      return [this.suggesting].concat(panties);
    }));
  }

  /**
   * 似ているパンツの表示を解除する
   */
  clearSuggestions() {
    this.suggesting = null;
    this.panties$ = this.allPanties$;
  }

  /**
   * 現在選択しているパンツが表示範囲内に入るようにスクロールする
   */
  focusCurrentPanty() {
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
