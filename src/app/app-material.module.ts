// Angular Materialのモジュールを宣言するファイル

import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
} from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
];

@NgModule({
  exports: MAT_MODULES,
})
export class AppMaterialModule { }
