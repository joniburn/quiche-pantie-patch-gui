import { Component, OnInit } from '@angular/core';

import { Converter } from '../converters';
import { PantiesService } from '../services/panties.service';

@Component({
  selector: 'qpp-zip-dialog',
  templateUrl: './zip-dialog.component.html',
  styleUrls: ['./zip-dialog.component.scss']
})
export class ZipDialogComponent implements OnInit {

  loaded = false;
  zips: Converter[];

  constructor(
    public pantieService: PantiesService,
  ) {
  }

  ngOnInit(): void {
    this.pantieService.getZipModels().subscribe(zips => {
      this.loaded = true;
      this.zips = zips;
    });
  }

}
