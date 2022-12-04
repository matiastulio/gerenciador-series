import { Component, Inject, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-crud-series',
  templateUrl: './crud-series.component.html',
  styleUrls: ['./crud-series.component.scss']
})
export class CrudSeriesComponent {
  constructor(
    public dialogRef: MatDialogRef<CrudSeriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.titulo = data.titulo;
  }


  serie: any = {
    titulo:"",
    descricao:""
  };
  titulo = '';


  validateSerie(){
    console.log("TODO: validar série");
  }
}
