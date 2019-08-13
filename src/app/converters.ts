/**
 * 変換の定義
 */
export interface Converter {

  /**
   * 画面に表示する名前
   */
  displayName: string;

  /**
   * 有効なオプションキー名
   */
  options: string[];

}

export const CONVERTERS: {[key: string]: Converter} = {

  anna: {
    displayName: '吸血鬼アンナちゃん',
    options: [],
  },
  anna_light: {
    displayName: '吸血鬼アンナちゃん(ライト)',
    options: [],
  },
  fuzzy: {
    displayName: 'ファジーちゃん',
    options: [],
  },
  linz: {
    displayName: 'リンツちゃん',
    options: [],
  },
  linz_nbody: {
    displayName: 'リンツちゃん(素体)',
    options: [],
  },
  lua: {
    displayName: 'ルアちゃん',
    options: [],
  },
  lua_quest: {
    displayName: 'ルアちゃん(クエスト)',
    options: [],
  },
  milk: {
    displayName: 'ミルクちゃん',
    options: [],
  },
  mishe: {
    displayName: 'ミーシェちゃん',
    options: [],
  },
  quiche: {
    displayName: 'キッシュちゃん',
    options: [],
  },
  quiche_bra: {
    displayName: 'キッシュちゃん(ブラ)',
    options: [],
  },
  quiche_light: {
    displayName: 'キッシュちゃん(ライト)',
    options: [],
  },
  quiche_nbody: {
    displayName: 'キッシュちゃん(素体)',
    options: [],
  },
  ramne: {
    displayName: 'ラムネちゃん',
    options: [],
  },
  shaclo: {
    displayName: 'シャーロちゃん',
    options: [],
  },
  tanu: {
    displayName: 'たぬちゃん',
    options: [],
  },
  ukon: {
    displayName: '右近ちゃん',
    options: [],
  },
  yuko: {
    displayName: '幽狐さん',
    options: [],
  },
};
