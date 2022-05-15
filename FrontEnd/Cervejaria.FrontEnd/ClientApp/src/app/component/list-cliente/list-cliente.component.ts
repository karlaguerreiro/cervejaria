import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListClienteComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Código', 'Cliente', 'Contato'];
  expandedElement: PeriodicElement | undefined;
  isUrl(str: string) {
    if (typeof str == "number") return false;
    return (str.includes('http'))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  Cliente: string;
  Código: number;
  Contato: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Cliente: "Cliente 1",
    Código: 101,
    Contato: 'Jorge',
  },
  {
    Cliente: "Cliente 2",
    Código: 102,
    Contato: 'João',
  },

];
