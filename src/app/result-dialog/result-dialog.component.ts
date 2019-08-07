import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'qpp-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent implements AfterViewInit {

  loaded = false;

  @ViewChild('dream', {static: true})
  dream: ElementRef<HTMLImageElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {url: string},
  ) {
  }

  ngAfterViewInit() {
    // ロード完了後に画像を表示する
    this.dream.nativeElement.addEventListener('load', () => this.loaded = true);
  }

}
