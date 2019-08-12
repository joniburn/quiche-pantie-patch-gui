import { Component } from '@angular/core';


/**
 * 変更履歴
 */
interface UpdateLog {
  version: string;
  date: string;
  descriptions: string[];
}

@Component({
  selector: 'qpp-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {

  updateLog: UpdateLog[] = [
    {
      version: 'v1.5.0',
      date: '2019-08-12',
      descriptions: [
        '画面外のパンツ画像を後から読み込むように変更',
        'パンツ一覧の一番上／一番下にスクロールするボタンを追加',
      ],
    },
    {
      version: 'v1.4.0',
      date: '2019-08-12',
      descriptions: [
        'ブラウザータブに表示されるタイトルを変更',
        '幽狐さんの変換に対応',
      ],
    },
    {
      version: 'v1.3.0',
      date: '2019-08-09',
      descriptions: [
        '更新履歴を追加',
        'パンツ一覧をAPIから取得し、毎日自動更新されるように修正',
        'パンツ一覧のサムネイル画像サイズを変更できる機能を追加',
      ],
    },
    {
      version: 'v1.2.0',
      date: '2019-08-08',
      descriptions: [
        '「このアプリについて」を追加',
      ],
    },
    {
      version: 'v1.1.0',
      date: '2019-08-07',
      descriptions: [
        'パンツ変換中にアニメーションを表示',
        'パンツ画像の背景にアルファ透過でおなじみのチェック柄を表示',
        'パンツ変換後の画像が大きく表示されすぎる問題を修正',
      ],
    },
    {
      version: 'v1.0.0',
      date: '2019-08-06',
      descriptions: [
        '暫定バージョン',
      ],
    },
  ];

}
