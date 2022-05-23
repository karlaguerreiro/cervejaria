import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';

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
  dataSource:any;
  columnsToDisplay = ['id', 'nome'];
  expandedElement: any | undefined;
  isUrl(str: string) {
    if (typeof str == "number") return false;
    return (str.includes('http'))
  }
  constructor(private service: ClienteFornecedorService) { }

  ngOnInit(): void {
    this.service.GetByType(0).subscribe(
      {
        next: (base: any) => {
          let x = base;
          this.dataSource = x.data;
          console.log(this.dataSource);
        }
      }
    );
  }
}
