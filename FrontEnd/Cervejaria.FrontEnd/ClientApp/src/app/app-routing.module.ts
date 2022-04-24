import { InsumoComponent } from './views/insumo/insumo.component';
import { ReceitaComponent } from './views/receita/receita.component';
import { ListInsumoComponent } from './component/list-insumo/list-insumo.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaListaComponent } from './views/receita-lista/receita-lista.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'insumos',
    component: InsumoComponent
  },
  {
    path: 'add-receita',
    component: ReceitaComponent
  },
  {
    path: 'list-receita',
    component: ReceitaListaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
