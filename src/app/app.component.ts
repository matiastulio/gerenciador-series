import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gerenciador-series';
  autor = 'Túlio de Carvalho Matias';
  series:any = [{titulo: 'naruto', qtdEpisodios: '5'}];
}
