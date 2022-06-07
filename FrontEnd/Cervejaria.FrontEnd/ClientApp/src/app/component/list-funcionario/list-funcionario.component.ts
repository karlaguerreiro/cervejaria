import { DtoContato } from './../../DTOs/DtoContato';
import { DtoUsuario } from 'src/app/DTOs/DtoUsuario';

import { FuncionarioService } from 'src/app/Service/Funcionario.service';
import { Funcionario } from './../../Models/Funcionario';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component';
import { DtoInfoUsuario } from 'src/app/DTOs/DtoInfoUsuario';
export interface PeriodicElement {
  nome: string;
  codigo: number;
  tipo: string;
  ingrediente: string;
}

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'action'];
  dataSource:any;
  values: any;
  FuncionarioService: any;
  constructor(public dialog: MatDialog, private service: FuncionarioService) { }
  
  ngOnInit(): void {
    this.service.obterFuncionarios().subscribe(
      { next: base => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);

  }
 });
}
openDialog(element: DtoInfoUsuario | DtoUsuario): void {
  const dialogRef = this.dialog.open(ElementDialogComponent, {
    width: '300px',
    data: element === null ? {
      id: null,
      nome: null,
      email: null,
      telefone: null
    } :  {
      // id: element.id,
      // nome: element.nome,
      // email: element.email,
      // telefone: element.telefone,
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
    this.table.ngOnInit();
  });
}

  deleteReceita(codigo: number) {
    this.dataSource = this.dataSource.filter((p: { id: number; }) => this.service.deletarFuncionario(p.id).subscribe(
      { next: (base: any) => {
        console.log(base);
      }}));
  }


  editReceita(element: Funcionario | null) {
    // this.openDialog(element);
}

  showReceita(element: any) : void{
    this.FuncionarioService.obterFuncionario(element.id).subscribe(
      { next: (base: any) => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);
      }
    });
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '500px',
      data: this.values 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}

