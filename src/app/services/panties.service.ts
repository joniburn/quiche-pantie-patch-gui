import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://pantie-patch.herokuapp.com';

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
    // TODO APIから取得する
    return this.client.get<string[]>(`/assets/panties.json`);
  }

  /**
   * コンバーター定義を取得する。
   */
  getConverters(): Observable<{[key: string]: string}> {
    return this.client.get<{[key: string]: string}>(`/assets/converters.json`);
  }

  /**
   * 変換前パンツのURLを返す。
   *
   * @param path パンツのファイル名
   */
  originalPantyUrl(path: string): string {
    return `${BASE_URL}/dream/${path}`;
  }

  /**
   * 変換後パンツのURLを返す。
   *
   * @param model 変換対象モデル
   * @param path パンツのファイル名
   */
  convertedPantyUrl(model: string, path: string): string {
    return `${BASE_URL}/converted/${model}/${path}`;
  }

}
