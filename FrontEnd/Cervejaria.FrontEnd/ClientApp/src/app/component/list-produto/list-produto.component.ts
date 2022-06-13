import { DtoProduto } from './../../DTOs/DtoProduto';
import { ProdutoService } from 'src/app/Service/Produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component';
import { ElementDialogProdutoComponent } from 'src/app/modal/element-dialog-produto/element-dialog-produto.component';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListProdutoComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  dataSource:DtoProduto []=[];
  displayedColumns : string[] = ['id', 'nome'  , 'quantidade', 'action'];
  expandedElement: any | undefined;
  dialog: any;
  produtoService: any;
  values: any;
  isUrl(str: string) {
    if (typeof str == "number") return false;
    return (str.includes('http'))
  }
  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.GetAll().subscribe(
      {
        next: (base: any) => {
          let x = base;
          this.dataSource = x.data;
          console.log(this.dataSource);
        }
      }
    );
  }

  openDialog(element: DtoProduto): void {
    const dialogRef = this.dialog.open(ElementDialogProdutoComponent, {
      width: '500px',
      height: '500px',
        data: element === null ? {
        id: null,
        nome: null,
        quantidade: null, 
      } :  {
        id: element.id,
        nome: element.nome,
        quantidade: element.quantidade,
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

    deleteProduto( id: number): void {
      this.service.Delete(id).subscribe(()=>{
        this.ngOnInit();
      })
        
    }

    editProduto(element: DtoProduto): void {
      this.openDialog(element);
    }

  }

