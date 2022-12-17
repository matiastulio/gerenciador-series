import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UpdateListServiceService } from 'src/app/services/update-list-service.service';
import { CrudSeriesComponent } from '../crud-series/crud-series.component';

@Component({
  selector: 'app-list-all-series',
  templateUrl: './list-all-series.component.html',
  styleUrls: ['./list-all-series.component.scss']
})
export class ListAllSeriesComponent {

  series: any[];
  colunas: string[] = ['titulo', 'descricao', 'tipo', 'episodio', 'editar', 'excluir'];

  constructor(private localStore: LocalStorageService,
    private listUpdater: UpdateListServiceService,
    public dialog: MatDialog) {
      this.series = [];
    this.buscaSeries();
  }

  buscaSeries() {
    this.listUpdater.data.subscribe(atualiza =>{
      if(atualiza) this.atualizaSeries();
    })
  }

  remover(posicao: number){
    console.log("deletar: " + posicao);
    this.series.splice(posicao,1)
    this.localStore.salvar("series",JSON.stringify(this.series));
    this.atualizaSeries();
  }

  editar(posicao: number){
    console.log("editar: "+posicao);
    const dialogRef = this.dialog.open(CrudSeriesComponent, {
      width: '470px',
      data: {titulo: "Editar",
            serie: this.series[posicao],
            posicao
          },
    });
  }

  atualizaSeries() {
    this.series = JSON.parse(this.localStore.getDados("series") || '[]');
    navigator.serviceWorker.getRegistrations().then(registrations => {
      console.log(registrations);
    });
  }
}

