/**
 * 変換オプション
 */
export interface ConverterOption {
  description: string;
  defaultValue: boolean;
}

/**
 * 変換オプションの定義
 */
export const OPTION_DESCRIPTIONS: {[optionName: string]: ConverterOption} = {
  with_bra: {
    description: 'ブラの出力',
    defaultValue: true,
  },
  is_lace: {
    description: 'フリルをレースに変更',
    defaultValue: false,
  },
  dis_ribbon: {
    description: 'リボンの無効化',
    defaultValue: false,
  },
  dis_shading: {
    description: '影の自動彩色の無効化',
    defaultValue: false,
  },
  dis_decoration: {
    description: 'フリルやレースの無効化',
    defaultValue: false,
  },
  dis_texturing: {
    description: 'ブラの胸パッド部分以外の自動テクスチャの無効化',
    defaultValue: false,
  },
  add_sign: {
    description: '淫紋を刻む',
    defaultValue: false,
  },
  stitch_correction: {
    description: '縫い目の補正(なんか変になった時に指定してください)',
    defaultValue: false,
  },
  is_frill: {
    description: 'お尻側にフリルのあるパンツはこれを指定してください',
    defaultValue: false,
  },
  use_ribbon_mesh: {
    description: 'テクスチャのリボンではなくメッシュのリボンを使用',
    defaultValue: false,
  },
};
