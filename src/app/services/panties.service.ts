import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Converter } from '../converters';
import { ConverterOption, OPTION_DESCRIPTIONS } from '../options';

const BASE_URL = 'https://labten.net/pantie-patch';

/**
 * パンツ一覧取得APIの返却値。
 */
interface DreamList {
  images: string[];
}

/**
 * 変換先モデル一覧取得APIの返却値。
 */
interface ModelList {
  models: string[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  display_names: string[];
}

/**
 * ZIPダウンロード可能なモデル一覧取得APIの返却値。
 */
interface ZipList {
  zips: string[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  display_names: string[];
}

/**
 * 似ているパンツの検索APIの返却値。
 */
interface SuggestList {
  suggests: string[];
  scores: number[];
}

/**
 * モデル詳細取得APIの返却値。
 */
interface Model {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  display_name: string;
  images: string[];
  options: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PantiesService {

  constructor(
    private client: HttpClient,
  ) {
  }

  /**
   * パンツのファイル名一覧を取得する。
   */
  getPanties(): Observable<string[]> {
    return this.client.get<DreamList>(`${BASE_URL}/api/dream/`).pipe(
      map(dreamList => dreamList.images));
  }

  /**
   * 似ているパンツの検索を行う。
   *
   * @param path 検索対象パンツのファイル名
   */
  getSuggestions(path: string): Observable<string[]> {
    return this.client.get<SuggestList>(`${BASE_URL}/api/suggest/${path}`).pipe(
      map(suggestList => suggestList.suggests));
  }

  /**
   * コンバーター定義を取得する。
   */
  getConverters(): Observable<Converter[]> {
    return this.client.get<ModelList>(`${BASE_URL}/api/convert/`).pipe(map(modelList => {
      const converters = [];
      for (let i = 0; i < modelList.models.length; i++) {
        converters.push({
          modelName: modelList.models[i],
          displayName: modelList.display_names[i],
        });
      }
      return converters;
    }));
  }

  /**
   * ZIPダウンロード可能なモデル一覧を取得する。
   */
  getZipModels(): Observable<Converter[]> {
    return this.client.get<ZipList>(`${BASE_URL}/api/zip/`).pipe(map(zipList => {
      const converters = [];
      for (let i = 0; i < zipList.zips.length; i++) {
        converters.push({
          modelName: zipList.zips[i],
          displayName: zipList.display_names[i],
        });
      }
      return converters;
    }));
  }

  /**
   * 変換対象モデルが対応しているオプションの一覧を取得する。
   *
   * @param model 変換対象モデル
   */
  getModelOptions(model: string): Observable<{[optionName: string]: ConverterOption}> {
    return this.client.get<Model>(`${BASE_URL}/api/convert/${model}/`).pipe(map(modelData => {
      const options = {};
      for (const optionName of modelData.options) {
        if (OPTION_DESCRIPTIONS[optionName]) {
          options[optionName] = OPTION_DESCRIPTIONS[optionName];
        } else {
          // 未知のオプション
          options[optionName] = {
            description: optionName,
            defaultValue: false,
          };
        }
      }
      return options;
    }));
  }

  /**
   * 変換前パンツのURLを返す。
   *
   * @param path パンツのファイル名
   */
  originalPantyUrl(path: string): string {
    return `${BASE_URL}/api/dream/${path}`;
  }

  /**
   * 変換後パンツのURLを返す。
   *
   * @param model 変換対象モデル
   * @param path パンツのファイル名
   * @param options 変換オプション
   */
  convertedPantyUrl(model: string, path: string,
                    options: {[key: string]: string}): string {
    const url = new URL(`${BASE_URL}/api/convert/${model}/${path}`);
    const params = url.searchParams;
    Object.entries(options).forEach((e) => {
      params.append(e[0], e[1]);
    });
    return url.toString();
  }

  /**
   * ZIPダウンロードのURLを返す。
   *
   * @param zip zipファイル名
   */
  zippedPantyUrl(zip: string): string {
    return `${BASE_URL}/api/zip/${zip}`;
  }

}
