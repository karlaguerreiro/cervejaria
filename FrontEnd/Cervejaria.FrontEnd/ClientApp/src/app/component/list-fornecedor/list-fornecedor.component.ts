import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';

@Component({
  selector: 'app-list-fornecedor',
  templateUrl: './list-fornecedor.component.html',
  styleUrls: ['./list-fornecedor.component.css'],
})
export class ListFornecedorComponent implements OnInit {
  displayedColumns = ['nome', 'contato', 'telefone'];
  dataSource: any;

  constructor(private fornecedorservice: ClienteFornecedorService) { }

  ngOnInit(): void {
    this.fornecedorservice.GetAll().subscribe(
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
