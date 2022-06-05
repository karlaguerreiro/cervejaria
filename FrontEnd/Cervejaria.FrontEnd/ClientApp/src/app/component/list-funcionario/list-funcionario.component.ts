
import { FuncionarioService } from 'src/app/Service/Funcionario.service';
import { Funcionario } from './../../Models/Funcionario';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component';
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

  openDialog(element: Funcionario | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
      data: element === null ? {
        id: null,
        nome: null,
        email: null,
        telefone: null
      } :  {
        id: element,
        nome: element.nome,
        email: element.email,
        telefone: element.telefone,
      }
    });
}

//   dialogRef.afterClosed().subscribe(result => {
//     if (result !== undefined) {
//       if (this.dataSource.map((p: { id: any; }) => p.id).includes(result.codigo)) {
//         this.dataSource[result.codigo - 1] = result;
//         this.table.renderRows();
//       }else{
//         this.dataSource.push(result);
//         this.table.renderRows();
//       }
//     });

//   deleteReceita(codigo: number): void {
//     this.dataSource = this.dataSource.filter((receita: { id: number; }) => receita.id !== codigo);
//     this.table.renderRows();
//   }

//   editReceita(element: Funcionario | null): void {
//        this.openDialog(element);
//        this.service.atualizarFuncionario(element).subscribe(
//           { next: base => {
//             let x = base;
//             this.dataSource = x.data;
//             console.log(this.dataSource);
//           }
//         });
// }

//   showReceita(element: any): void {
//     const dialogRef = this.dialog.open(ElementDialogComponent, {
//       width: '300px',
//       data: element === null ? {
//         id: null,
//         nome: null,
//         email: null,
//         telefone: null
//       } :  {
//         id: element.id,
//         nome: element.nome,
//         email: element.email,
//         telefone: element.telefone,
//       }
//     });
//   }
};