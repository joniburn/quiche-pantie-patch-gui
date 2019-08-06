// Angular Materialのモジュールを宣言するファイル

import { NgModule } from '@angular/core';

import {
  MatButtonModule,
} from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
];

@NgModule({
  exports: MAT_MODULES,
})
export class AppMaterialModule { }
