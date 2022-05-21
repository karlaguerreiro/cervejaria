// import { ReceitaService } from './Service/Receita.service';
// import { ProdutoService } from './Service/Produto.service';
import { FornecedorService } from './Service/Fornecedor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { ListInsumoComponent } from './component/list-insumo/list-insumo.component';
import { InsumoComponent } from './views/insumo/insumo.component'
import { ReceitaComponent } from './views/receita/receita.component';
import { AddReceitaComponent } from './component/add-receita/add-receita.component';
import { ListReceitaComponent } from './component/list-receita/list-receita.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddInsumoComponent } from './component/add-insumo/add-insumo.component';
import { InsumoService } from './Service/Insumo.service';
import { ListFornecedorComponent } from './component/list-fornecedor/list-fornecedor.component';
import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { AddFornecedorComponent } from './component/add-fornecedor/add-fornecedor.component';
import { AddClienteComponent } from './component/add-cliente/add-cliente.component';
import { ListClienteComponent } from './component/list-cliente/list-cliente.component';
import { ListProdutoComponent } from './component/list-produto/list-produto.component';
import { AddProdutoComponent } from './component/add-produto/add-produto.component';
import { AddFuncionarioComponent } from './component/add-funcionario/add-funcionario.component';
import { ListFuncionarioComponent } from './component/list-funcionario/list-funcionario.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClienteFornecedorService } from './Service/ClienteFornecedor.Service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FuncionarioService } from './Service/Funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListInsumoComponent,
    InsumoComponent,
    ReceitaComponent,
    AddReceitaComponent,
    ListReceitaComponent,
    AddInsumoComponent,
    ListFornecedorComponent,
    FornecedorComponent,
    AddFornecedorComponent,
    AddClienteComponent,
    ListClienteComponent,
    ListProdutoComponent,
    AddProdutoComponent,
    AddFuncionarioComponent,
    ListFuncionarioComponent,
    ClienteComponent,
    FuncionarioComponent,

  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    NgbModule,
    MatTableModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    InsumoService,
    ClienteFornecedorService,
    // FornecedorService,
    // ProdutoService,
    // ReceitaService,
    FuncionarioService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {

}
