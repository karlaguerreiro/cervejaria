import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.Service';

@Component({
  selector: 'app-list-fornecedor',
  templateUrl: './list-fornecedor.component.html',
  styleUrls: ['./list-fornecedor.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListFornecedorComponent implements OnInit {
  displayedColumns: string[] = ['nome','contato','telefone'];
  dataSource: any;

  constructor(private _service: ClienteFornecedorService) { }

  ngOnInit(): void {
    this._service.GetAll().subscribe(
      {
        next: base => {
          let x = base;
          this.dataSource = x.data;
          console.log(this.dataSource);
        }
      }
    );
  }

};

export interface PeriodicElement {
  Fornecedor: string;
  Código: number;
  Nome: string;
  descricao: string;
  Insumos: string;
}

