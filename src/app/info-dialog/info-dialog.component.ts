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
      version: 'v1.18.0',
      date: '2019-12-17',
      descriptions: [
        'パンツガチャを追加',
        'アバター一覧が増えてきたので折り返して表示',
      ],
    },
    {
      version: 'v1.17.0',
      date: '2019-11-28',
      descriptions: [
        '新しい変換オプション(量産型のらきゃっと用)に対応',
      ],
    },
    {
      version: 'v1.16.0',
      date: '2019-10-12',
      descriptions: [
        'パンツをZIPでダウンロードする機能を追加',
      ],
    },
    {
      version: 'v1.15.0',
      date: '2019-10-06',
      descriptions: [
        'パンツAPIのURLを移行(より高速なパンツ変換が行えます。)',
      ],
    },
    {
      version: 'v1.14.0',
      date: '2019-09-25',
      descriptions: [
        'パンツAPIからモデルの表示名とオプション一覧を取得するように変更' +
        '(これにより、新規モデルが追加された際は自動的にGUIも対応します。)',
      ],
    },
    {
      version: 'v1.13.0',
      date: '2019-09-24',
      descriptions: [
        'フィリナちゃんの変換に対応',
      ],
    },
    {
      version: 'v1.12.0',
      date: '2019-09-23',
      descriptions: [
        'Noyちゃんの変換に対応',
      ],
    },
    {
      version: 'v1.11.0',
      date: '2019-08-23',
      descriptions: [
        'コルネットちゃんの変換に対応',
      ],
    },
    {
      version: 'v1.10.0',
      date: '2019-08-16',
      descriptions: [
        'サイズ変更時等にパンツを見失うことがあるので、選択中のパンツへスクロールする機能を追加',
      ],
    },
    {
      version: 'v1.9.0',
      date: '2019-08-14',
      descriptions: [
        'VRoidちゃんの変換に対応',
      ],
    },
    {
      version: 'v1.8.0',
      date: '2019-08-14',
      descriptions: [
        '似ているパンツを検索する機能を追加',
      ],
    },
    {
      version: 'v1.7.0',
      date: '2019-08-13',
      descriptions: [
        'パンツの変換オプションを指定する機能を追加',
      ],
    },
    {
      version: 'v1.6.0',
      date: '2019-08-13',
      descriptions: [
        'ブラウザ上の画像処理でテクスチャにパンツを重ねる機能を追加',
      ],
    },
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
        'ブラウザタブに表示されるタイトルを変更',
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
