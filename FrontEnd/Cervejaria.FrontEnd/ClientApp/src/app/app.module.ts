
import { ProdutoService } from './Service/Produto.service';
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
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddInsumoComponent } from './component/add-insumo/add-insumo.component';
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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClienteFornecedorService } from './Service/ClienteFornecedor.Service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ElementDialogComponent } from './modal/element-dialog/element-dialog.component';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from './Service/Funcionario.service';
import { InsumoService } from './Service/insumo.service';
import { ReceitaService } from './Service/receita.service';
import { ListReceitaComponent } from './component/list-receita/list-receita.component';
import { ElementDialogFornecedorComponent } from './modal/element-dialog-fornecedor/element-dialog-fornecedor.component';
import { ElementDialogClientComponent } from './modal/element-dialog-client/element-dialog-client.component';
import { ElementDialogInsumoComponent } from './modal/element-dialog-insumo/element-dialog-insumo.component';
import { ElementDialogReceitaComponent } from './modal/element-dialog-receita/element-dialog-receita.component';
import { ElementDialogProdutoComponent } from './modal/element-dialog-produto/element-dialog-produto.component';
import { ElementDialogFuncionarioComponent } from './modal/element-dialog-funcionario/element-dialog-funcionario.component';


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
    ElementDialogComponent,
    ElementDialogFornecedorComponent,
    ElementDialogClientComponent,
    ElementDialogInsumoComponent,
    ElementDialogReceitaComponent,
    ElementDialogProdutoComponent,
    ElementDialogFuncionarioComponent,

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
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    CommonModule,

  ],
  providers: [
    InsumoService,
    ClienteFornecedorService,
    // FornecedorService,
    ProdutoService,
    ReceitaService,
    FuncionarioService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {

}
