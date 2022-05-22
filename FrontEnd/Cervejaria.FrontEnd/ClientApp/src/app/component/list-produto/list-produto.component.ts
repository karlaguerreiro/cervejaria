import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {
  displayedColumns: string[] = ['nomeproduto','descricaoproduto','qntproduto'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
  }

}
