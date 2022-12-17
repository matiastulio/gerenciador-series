import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CrudSeriesComponent } from '../crud-series/crud-series.component';

@Component({
  selector: 'app-titulo-toolbar',
  templateUrl: './titulo-toolbar.component.html',
  styleUrls: ['./titulo-toolbar.component.scss']
})
export class TituloToolbarComponent implements OnInit  {
  titulo = 'CadastrarFromApp';
  isOnline: boolean = false;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.updateOnlineStatus();
    window.addEventListener('online',  this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
  }

  openDialog(){
    const dialogRef = this.dialog.open(CrudSeriesComponent, {
      width: '470px',
      data: {titulo: this.titulo},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
