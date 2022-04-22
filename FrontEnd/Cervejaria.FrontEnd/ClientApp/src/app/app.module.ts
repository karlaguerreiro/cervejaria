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
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],


})
export class AppModule {

}
