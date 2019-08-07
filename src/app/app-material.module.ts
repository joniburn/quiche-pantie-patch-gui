// Angular Materialのモジュールを宣言するファイル

import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDialogModule,
  MatProgressBarModule,
  MatRadioModule,
} from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatDialogModule,
  MatProgressBarModule,
  MatRadioModule,
];

@NgModule({
  exports: MAT_MODULES,
})
export class AppMaterialModule { }
