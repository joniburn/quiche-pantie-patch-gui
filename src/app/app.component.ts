import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ResultDialogComponent } from './result-dialog/result-dialog.component';

@Component({
  selector: 'qpp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  targets = [
    ['quiche', 'キッシュちゃん'],
    ['quiche_nbody', 'キッシュちゃん(素体)'],
  ];

  execute() {
    this.dialog.open(ResultDialogComponent, {
      disableClose: true,
    });
  }

}
