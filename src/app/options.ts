/**
 * 変換オプション
 */
export interface ConverterOption {
  with_bra: boolean;
  is_lace: boolean;
  dis_ribbon: boolean;
  dis_shading: boolean;
  dis_decoration: boolean;
  dis_texturing: boolean;
  add_sign: boolean;
  stitch_correction: boolean;
  is_frill: boolean;
  use_ribbon_mesh: boolean;
}

/**
 * 変換オプションの画面表示名
 */
export const OPTION_DESCRIPTIONS: {[key: string]: string} = {
  with_bra: 'ブラの出力',
  is_lace: 'フリルをレースに変更',
  dis_ribbon: 'リボンの無効化',
  dis_shading: '影の自動彩色の無効化',
  dis_decoration: 'フリルやレースの無効化',
  dis_texturing: 'ブラの胸パッド部分以外の自動テクスチャの無効化',
  add_sign: '淫紋を刻む',
  stitch_correction: '縫い目の補正(なんか変になった時に指定してください)',
  is_frill: 'お尻側にフリルのあるパンツはこれを指定してください',
  use_ribbon_mesh: 'テクスチャのリボンではなくメッシュのリボンを使用',
};
