import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-fornecedor',
  templateUrl: './list-fornecedor.component.html',
  styleUrls: ['./list-fornecedor.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListFornecedorComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Fornecedor', 'Código', 'Nome'];
  expandedElement: PeriodicElement | undefined;
  isUrl(str: string) {
      if(typeof str == "number" )  return false; 
      return (str.includes('http'))
  }
  constructor() { }

  ngOnInit(): void {
  }

};

export interface PeriodicElement {
  Fornecedor: string;
  Código: number;
  Nome: string;
  descricao: string;
  Insumos: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Fornecedor: "Fornecedor Teste",
    Código: 123,
    Nome: 'Lupulo',
    descricao: `teste`,
    Insumos:`Lupulo`,
  },
  {
    Fornecedor: "Fornecedor Teste",
    Código: 321,
    Nome: 'Cevada',
    descricao: `teste`,
    Insumos:`cevada`,
  },

];
