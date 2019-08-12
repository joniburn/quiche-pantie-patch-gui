// Angular Materialのモジュールを宣言するファイル

import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatRadioModule,
  MatTabsModule,
  MatTooltipModule,
} from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatRadioModule,
  MatTabsModule,
  MatTooltipModule,
];

@NgModule({
  exports: MAT_MODULES,
})
export class AppMaterialModule { }