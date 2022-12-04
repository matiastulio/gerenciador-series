import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-all-series',
  templateUrl: './list-all-series.component.html',
  styleUrls: ['./list-all-series.component.scss']
})
export class ListAllSeriesComponent {

  series:any;

  constructor(private localStore: LocalStorageService) {
    this.buscaSeries();
  }

  buscaSeries() {
      this.series = this.localStore.getDados("series");
  }
}
