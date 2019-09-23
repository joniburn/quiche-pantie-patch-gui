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
    options: ['add_sign'],
  },
  anna_light: {
    displayName: '吸血鬼アンナちゃん(ライト)',
    options: [],
  },
  fuzzy: {
    displayName: 'ファジーちゃん',
    options: ['is_frill'],
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
    options: ['add_sign'],
  },
  mishe: {
    displayName: 'ミーシェちゃん',
    options: ['add_sign'],
  },
  quiche: {
    displayName: 'キッシュちゃん',
    options: [],
  },
  quiche_bra: {
    displayName: 'キッシュちゃん(ブラ)',
    options: ['is_lace', 'dis_ribbon', 'dis_shading', 'dis_decoration', 'dis_texturing'],
  },
  quiche_light: {
    displayName: 'キッシュちゃん(ライト)',
    options: [],
  },
  quiche_nbody: {
    displayName: 'キッシュちゃん(素体)',
    options: ['with_bra'],
  },
  ramne: {
    displayName: 'ラムネちゃん',
    options: ['add_sign'],
  },
  shaclo: {
    displayName: 'シャーロちゃん',
    options: ['stitch_correction'],
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
    options: ['use_ribbon_mesh'],
  },
  vroid: {
    displayName: 'VRoidちゃん',
    options: [],
  },
  cornet: {
    displayName: 'コルネットちゃん',
    options: [],
  },
  cornet_nbody: {
    displayName: 'コルネットちゃん(素体)',
    options: [],
  },
  noy: {
    displayName: 'Noyちゃん',
    options: [],
  },
  firina: {
    displayName: 'フィリナちゃん',
    options: [],
  },
};
