import { FuncionarioService } from 'src/app/Service/Funcionario.service';
import { Funcionario } from './../../Models/Funcionario';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component';
import { DtoInfoUsuario } from 'src/app/DTOs/DtoInfoUsuario';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListFuncionarioComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  dataSource: any;
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'action'];
  expandedElement: any | undefined;
  dialog: any;

  constructor(private service: FuncionarioService) {}

  ngOnInit(): void {
    this.service.obterFuncionarios().subscribe({
      next: (base) => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);
      },
    });
  }

  openDialog(element: Funcionario): void {
    const dialogRef = this.dialog.open(ElementDialogFuncionarioComponent, {
      width: '300px',
      data:
        element === null?
           {
              id: null,
              nome: null,
              telefone: null,
              email: null,
            }
          : {
              id: element.id,
              nome: element.nome,
              telefone: element.telefone,
              email: element.email,
            },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
      this.table.ngOnInit();
      /*
        if (result !== undefined) {
          if (this.dataSource.map((p: { id: any; }) => p.id).includes(result.codigo)) {
            this.dataSource[result.codigo - 1] = result;
          }
        }
      }
      */
    });
  }

  deleteFuncionario(id: number): void {
    this.service.Delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }

  editFuncionario(element: Funcionario | null) {
    // this.openDialog(element);
  }
}
function ElementDialogFuncionarioComponent(ElementDialogFuncionarioComponent: any, arg1: { width: string; data: { id: null; nome: null; telefone: null; email: null; } | { id: number | undefined; nome: number; telefone: number; email: number; }; }) {
  throw new Error('Function not implemented.');
}

