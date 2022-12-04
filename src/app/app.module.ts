import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudSeriesComponent } from './components/crud-series/crud-series.component';
import { ListAllSeriesComponent } from './components/list-all-series/list-all-series.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {DialogModule} from '@angular/cdk/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TituloToolbarComponent } from './components/titulo-toolbar/titulo-toolbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DescricaoProjetoComponent } from './components/descricao-projeto/descricao-projeto.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: 'descricao', component: DescricaoProjetoComponent },
  { path: 'lista', component: ListAllSeriesComponent },
  { path: '',   redirectTo: '/lista', pathMatch: 'full' },
  {path: '**', redirectTo: '/lista'}
];

@NgModule({
  declarations: [
    AppComponent,
    CrudSeriesComponent,
    ListAllSeriesComponent,
    TituloToolbarComponent,
    RodapeComponent,
    DescricaoProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DialogModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

