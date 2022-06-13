import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DtoInsumo } from 'src/app/DTOs/DtoInsumo';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component';
import { InsumoService } from 'src/app/Service/insumo.service';

@Component({
  selector: 'app-list-insumo',
  templateUrl: './list-insumo.component.html',
  styleUrls: ['./list-insumo.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListInsumoComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  dataSource: DtoInsumo[] = [];
  displayedColumns: string[] = ['nome', 'dataCompra', 'undMedida', 'action'];
  expandedElement: any | null;
  values: any;
  isUrl(str: string) {
    if (typeof str == "number") return false;
    return (str.includes('http'))
  }

  constructor(private service: InsumoService,
    private dialog: MatDialog) {}

   ngOnInit(): void {
    this.service.obterInsumos().subscribe(
      {
        next: (base: any) => {
          let x = base;
          this.dataSource = x.data;
          console.log(this.dataSource);
        }
      }
    );
    }

    openDialog(element: DtoInsumo): void {
      const dialogRef = this.dialog.open(ElementDialogComponent, {
        width: '500px',
        height: '500px',
        data: element === null ? {
          id: null,
          nome: null,
          validade: null, 
        } :  {
          id: element.id,
          nome: element.nome,
          validade: element.validade,
        }
      });
  
      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
        this.table.ngOnInit()
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

    deleteInsumo( id: number): void {
      this.service.Delete(id).subscribe(()=>{
        this.ngOnInit();
        this.table.ngOnInit()
      })
    }

    editInsumo(element: DtoInsumo): void {
      this.openDialog(element);
    }


}
