import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-receita',
  templateUrl: './list-receita.component.html',
  styleUrls: ['./list-receita.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListReceitaComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Receita', 'Código', 'Nome'];
  expandedElement: PeriodicElement | undefined;
  isUrl(str: string) {
      if(typeof str == "number" )  return false; 
      return (str.includes('http'))
  }
  } ;


export interface PeriodicElement {
  Receita: string;
  Código: number;
  Nome: string;
  descricao: string;
  Insumos: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Receita:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    Código: 555,
    Nome: 'IPA',
    descricao: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    Insumos:`bla bla bla bla`,
  },
  {
    Receita: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    Código: 231,
    Nome: 'APA',
    descricao: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
    Insumos:`bla bla bla bla`,

  },

];