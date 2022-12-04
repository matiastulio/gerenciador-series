import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CrudSeriesComponent } from '../crud-series/crud-series.component';

@Component({
  selector: 'app-titulo-toolbar',
  templateUrl: './titulo-toolbar.component.html',
  styleUrls: ['./titulo-toolbar.component.scss']
})
export class TituloToolbarComponent {
  titulo = 'CadastrarFromApp';

  constructor(public dialog: MatDialog) {}
  openDialog(){
    const dialogRef = this.dialog.open(CrudSeriesComponent, {
      width: '470px',
      data: {titulo: this.titulo},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
