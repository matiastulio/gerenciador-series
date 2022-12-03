import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudSeriesComponent } from './components/crud-series/crud-series.component';
import { ListAllSeriesComponent } from './components/list-all-series/list-all-series.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudSeriesComponent,
    ListAllSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
