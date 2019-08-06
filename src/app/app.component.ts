import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { PantiesService } from './services/panties.service';

@Component({
  selector: 'qpp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  panties$: Observable<string[]>;
  converters$: Observable<[string, string][]>;

  path: string;
  model: [string, string];

  constructor(
    private dialog: MatDialog,
    public pantiesService: PantiesService,
  ) {
  }

  ngOnInit() {
    this.panties$ = this.pantiesService.getPanties();
    this.converters$ = this.pantiesService.getConverters().pipe(
      map(mapping => Object.entries(mapping)));
  }

  execute() {
    this.dialog.open(ResultDialogComponent, {
      disableClose: true,
      data: {
        url: this.pantiesService.convertedPantyUrl(this.model[0], this.path),
      }
    });
  }

}
