import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-all-series',
  templateUrl: './list-all-series.component.html',
  styleUrls: ['./list-all-series.component.scss']
})
export class ListAllSeriesComponent {

  @Input() series:any;

}
