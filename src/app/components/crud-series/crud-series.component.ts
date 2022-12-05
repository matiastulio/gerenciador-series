import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UpdateListServiceService } from 'src/app/services/update-list-service.service';

@Component({
  selector: 'app-crud-series',
  templateUrl: './crud-series.component.html',
  styleUrls: ['./crud-series.component.scss']
})
export class CrudSeriesComponent {

  public seriesForm: FormGroup;
  public formErrors = {
    titulo: '',
    descricao: '',
    tipo: '',
    episodio: ''
  };

  serie: any = {
    titulo:"",
    descricao:"",
    tipo:"",
    episodio:""
  };
  titulo = '';
  editar = false;
  posicao: any;


  constructor(
    public form: FormBuilder,
    public dialogRef: MatDialogRef<CrudSeriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private localStore: LocalStorageService,
    private listUpdater: UpdateListServiceService
  ) {
    this.titulo = data.titulo;
    this.seriesForm = this.form.group({
      titulo: ['', [Validators.required]],
      descricao: [''],
      tipo: ['', [Validators.required]],
      episodio: ['', [Validators.required]]
    });
    if(data.serie !== undefined){
      this.editar = true;
      this.posicao = data.posicao;
      this.seriesForm.setValue(data.serie);
    }
  }

  saveSeries(){
    if(this.editar){
      return this.editarSerie();
    }
    let series = JSON.parse(this.localStore.getDados("series") || '[]');
    series.push(this.seriesForm.value);
    this.localStore.salvar("series",JSON.stringify(series));
    this.listUpdater.data.next(true);
  }
  editarSerie() {
    let series = JSON.parse(this.localStore.getDados("series") || '[]');
    series.splice(this.posicao, 1 , this.seriesForm.value)
    this.localStore.salvar("series",JSON.stringify(series));
    this.listUpdater.data.next(true);
  }
}
