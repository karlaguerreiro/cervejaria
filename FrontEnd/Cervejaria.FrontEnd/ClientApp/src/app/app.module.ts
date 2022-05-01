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
import { ReceitaListaComponent } from './views/receita-lista/receita-lista.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddInsumoComponent } from './component/add-insumo/add-insumo.component';
import { InsumoService } from './Service/list-insumo.service';
import { ListFornecedorComponent } from './component/list-fornecedor/list-fornecedor.component';
import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { AddFornecedorComponent } from './component/add-fornecedor/add-fornecedor.component';


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
    ReceitaListaComponent,
    AddInsumoComponent,
    ListFornecedorComponent,
    FornecedorComponent,
    AddFornecedorComponent
  ],
  imports: [
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
    HttpClientModule
  ],
  providers: [
    InsumoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {

}
