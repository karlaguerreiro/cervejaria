import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component'
import { CommonModule } from '@angular/common'
import { elementAt } from 'rxjs';
import { ReceitaService } from 'src/app/Service/receita.service';
import { DtoReceita } from 'src/app/DTOs/DtoReceita';
import { InsumoService } from 'src/app/Service/insumo.service';
import { ListInsumoComponent } from '../list-insumo/list-insumo.component';
import { Insumo } from 'src/app/Models/Insumo';


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
  public values!: Insumo[];
  constructor(public dialog: MatDialog, private service: ReceitaService, private insumoService: InsumoService)
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
      width: '500px',
      height: '500px',
      data: element === null ? {
        id: null,
        nome: null,
        descricao: null
        
      } :  {
        id: element.id,
        nome: element.nome,
        descricao: element.descricao,
      }
    });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
    this.table.ngOnInit()
    /*
      if (result !== undefined) {
        if (this.dataSource.map((p: { id: any; }) => p.id).includes(result.codigo)) {
          this.dataSource[result.codigo - 1] = result;
          this.table.renderRows();
        }else{
          this.dataSource.push(result)
          this.table.renderRows();
        }
      }
      */
  });
  }

  deleteReceita(codigo: number): void {
    this.dataSource = this.dataSource.filter((p: { id: number; }) => this.service.deletarReceita(p.id).subscribe(
      { next: base => {
        console.log(base);
      }}));
  }

  editReceita(element: DtoReceita): void {
    this.openDialog(element);
  }

  showReceita(element: any): void {
    this.insumoService.obterInsumosPorIdReceita(element.id).subscribe(
      { next: base => {
        let x = base;
        this.values = x.data;
        console.log(x.data);
      }})
      // tem que chamar duas vezes o list insumo, da primeira vez ta bugando, o componente ta iniciando primeiro que a chamada da api
    const dialogRef = this.dialog.open(ListInsumoComponent, {
      width: '500px',
      data: this.values
    });
  dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      /*
      if (result !== undefined) {
        if (this.dataSource.map((p: { id: any; }) => p.id).includes(result.codigo)) {
          this.dataSource[result.codigo - 1] = result;
          this.table.renderRows();
        }else{
          this.dataSource.push(result)
          this.table.renderRows();
        }
      }
      */
  });

  }

}
