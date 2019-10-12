import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { ngfModule } from 'angular-file';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ZipDialogComponent } from './zip-dialog/zip-dialog.component';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset,
    }),
    ngfModule,
    AppMaterialModule,
  ],
  declarations: [
    AppComponent,
    InfoDialogComponent,
    ResultDialogComponent,
    ZipDialogComponent,
  ],
  entryComponents: [
    InfoDialogComponent,
    ResultDialogComponent,
    ZipDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
