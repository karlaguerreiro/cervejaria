import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component'
import { CommonModule } from '@angular/common'
import { elementAt } from 'rxjs';


export interface PeriodicElement {
  nome: string;
  codigo: number;
  tipo: string;
  ingrediente: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1,  nome: 'hydrogen',    tipo: 'pilsen', ingrediente:'cevada, lupolu, água'},
  {codigo: 2,  nome: 'Helium',    tipo: 'Lager', ingrediente:' trigo, cevada, água'},
  {codigo: 3,  nome: 'Lithium',   tipo: 'Puro malte', ingrediente:' Malte, lupolu, água'},
 
 
 
];

@Component({
  selector: 'app-list-receita',
  templateUrl: './list-receita.component.html',
  styleUrls: ['./list-receita.component.css']
})
export class ListReceitaComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['codigo', 'nome', 'tipo', 'action'];
  dataSource = ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  
  }

  openDialog(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
      data: element === null ? {
        codigo: null,
        nome: null,
        tipo: null,
        ingrediente: null,
      
      } :  {
        codigo: element.codigo,
        nome: element.nome,
        tipo: element.tipo,
        ingrediente: element.ingrediente,
      }
    });

  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.dataSource.map(p => p.codigo).includes(result.codigo)) {
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
    this.dataSource = this.dataSource.filter(p => p.codigo !== codigo);
  }

  editReceita(element: PeriodicElement): void {
    this.openDialog(element);
  }

  showReceita(element: any): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
      data: element === null ? {
        codigo: null,
        nome: null,
        tipo: null,
        ingrediente: null,
      
      } :  {
        codigo: null,
        nome: element.nome,
        tipo: element.tipo,
        ingrediente: element.ingrediente,
      }
    });

  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.dataSource.map(p => p.codigo).includes(result.codigo)) {
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
