// Angular Materialのモジュールを宣言するファイル

import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatRadioModule,
  MatTooltipModule,
} from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatRadioModule,
  MatTooltipModule,
];

@NgModule({
  exports: MAT_MODULES,
})
export class AppMaterialModule { }
