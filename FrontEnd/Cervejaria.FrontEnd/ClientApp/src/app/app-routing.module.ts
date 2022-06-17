import { ListFuncionarioComponent } from './component/list-funcionario/list-funcionario.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ListInsumoComponent } from './component/list-insumo/list-insumo.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsumoComponent } from './component/add-insumo/add-insumo.component';
import { ListFornecedorComponent } from './component/list-fornecedor/list-fornecedor.component';
import { AddFornecedorComponent } from './component/add-fornecedor/add-fornecedor.component';
import { AddClienteComponent } from './component/add-cliente/add-cliente.component';
import { ListProdutoComponent } from './component/list-produto/list-produto.component';
import { AddReceitaComponent } from './component/add-receita/add-receita.component';
import { AddFuncionarioComponent } from './component/add-funcionario/add-funcionario.component';
import { AddProdutoComponent } from './component/add-produto/add-produto.component';
import { ListReceitaComponent } from './component/list-receita/list-receita.component';

const routes: Routes = [
{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes',
    component: ClienteComponent,
  },
  {
    path: 'add-cliente',
    component: AddClienteComponent,
  },
  {
    path: 'fornecedores',
    component: ListFornecedorComponent,
  },
  {
    path: 'add-fornecedor',
    component: AddFornecedorComponent,
  },
  {
    path: 'insumos',
    component: ListInsumoComponent,
  },
  {
    path: 'add-insumo',
    component: AddInsumoComponent,
  },
  {
    path: 'receitas',
    component: ListReceitaComponent,
  },
  {
    path: 'add-receita',
    component: AddReceitaComponent,
  },
  {
    path: 'produtos',
    component: ListProdutoComponent,
  },
  {
    path: 'add-produto',
    component: AddProdutoComponent,
  },
  {
    path: 'funcionarios',
    component: ListFuncionarioComponent,
  },
  {
    path: 'add-funcionario',
    component: AddFuncionarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
