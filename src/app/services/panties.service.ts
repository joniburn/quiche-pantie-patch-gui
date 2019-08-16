import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as lodash from 'lodash';

import { CONVERTERS, Converter } from '../converters';

const BASE_URL = 'https://pantie-patch.herokuapp.com';

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
}

/**
 * 似ているパンツの検索APIの返却値。
 */
interface SuggestList {
  suggests: string[];
  scores: number[];
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
  getConverters(): Observable<{[key: string]: Converter}> {
    // 新規モデルが追加された場合、CONVERTERSの更新前でも変換を実行できるようにする
    const conv = lodash.cloneDeep(CONVERTERS);
    return this.client.get<ModelList>(`${BASE_URL}/api/convert/`).pipe(map(modelList => {
      for (const model of modelList.models) {
        if (!conv[model]) {
          conv[model] = {
            displayName: model,  // API上のモデル名をそのまま表示
            options: [],  // オプションは無し
          };
        }
      }
      return conv;
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

}
