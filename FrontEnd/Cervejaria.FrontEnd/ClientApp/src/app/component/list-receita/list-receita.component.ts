import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component'
import { CommonModule } from '@angular/common'
import { elementAt } from 'rxjs';
import { ReceitaService } from 'src/app/Service/receita.service';
import { DtoReceita } from 'src/app/DTOs/DtoReceita';
import { InsumoService } from 'src/app/Service/Insumo.service';


export interface PeriodicElement {
  nome: string;
  codigo: number;
  tipo: string;
  ingrediente: string;

}

@Component({
  selector: 'app-list-receita',
  templateUrl: './list-receita.component.html',
  styleUrls: ['./list-receita.component.css']
})
export class ListReceitaComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'tituloReceita', 'descricao', 'action'];
  dataSource:any;

  constructor(public dialog: MatDialog, private service: ReceitaService)
  {

  }

  ngOnInit(): void {
    this.service.obterReceitas().subscribe(
      { next: base => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);
      }});
  }

  openDialog(element: DtoReceita | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
      data: element === null ? {
        id: null,
        tituloReceita: null,
        descricao: null
      } :  {
        id: element.id,
        tituloReceita: element.tituloReceita,
        descricao: element.descricao,
      }
    });

  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.dataSource.map((p: { id: any; }) => p.id).includes(result.codigo)) {
          this.dataSource[result.codigo - 1] = result;
          this.table.renderRows();
        }else{
          this.dataSource.push(result)
          this.table.renderRows();
        }
      }
  });
  }

  deleteReceita(codigo: number): void {
    this.dataSource = this.dataSource.filter((p: { id: number; }) => p.id !== codigo);
  }

  editReceita(element: DtoReceita): void {
    this.openDialog(element);
    this.service.inserirReceita(element).subscribe(
      { next: base => {
        console.log(base);
      }});
  }

  showReceita(element: any): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
      data: element === null ? {
        id: null,
        tituloReceita: null,
        descricao: null
      } : {
        id: element.id,
        tituloReceita: element.tituloReceita,
        descricao: element.descricao
      }
    });

  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.dataSource.map((p: { id: any; }) => p.id).includes(result.codigo)) {
          this.dataSource[result.codigo - 1] = result;
          this.table.renderRows();
        }else{
          this.dataSource.push(result)
          this.table.renderRows();
        }
      }
  });

  }

}
