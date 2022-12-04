import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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


  constructor(
    public form: FormBuilder,
    public dialogRef: MatDialogRef<CrudSeriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private localStore: LocalStorageService
  ) {
    this.titulo = data.titulo;
    this.seriesForm = this.form.group({
      titulo: ['', [Validators.required]],
      descricao: [''],
      tipo: ['', [Validators.required]],
      episodio: ['', [Validators.required]]
    });
    if(data.serie !== undefined){
      this.seriesForm.setValue(data.serie);
    }
  }

  saveSeries(){
    let series = JSON.parse(this.localStore.getDados("series") || '[]');
    series.push(this.seriesForm.value);
    this.localStore.salvar("series",JSON.stringify(series));
    console.log(this.localStore.getDados("series"));
  }
}
