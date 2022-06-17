import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.Service';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/modal/element-dialog/element-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ElementDialogClientComponent } from 'src/app/modal/element-dialog-client/element-dialog-client.component';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListClienteComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  dataSource:ClienteFornecedor[]=[];
  displayedColumns : string[] = ['id', 'nome' , 'telefone' , 'email', 'action'];
  expandedElement: any | undefined;  clienteService: any;
  values: any;
  isUrl(str: string) {
    if (typeof str == "number") return false;
    return (str.includes('http'))
  }
  constructor(private service: ClienteFornecedorService,
    private dialog: MatDialog
    )  { }

  ngOnInit(): void {
    this.service.GetByType(0).subscribe(
      {
        next: (base: any) => {
          let x = base;
          this.dataSource = x.data;
          console.log(this.dataSource);
        }
      }
    );
  }

  openDialog(element: ClienteFornecedor| null): void {
    const dialogRef = this.dialog.open(ElementDialogClientComponent, {
      width: '500px',
      height: '500px',
      data: element === null ? {
        id: null,
        nome: null,
        cnpjCpf: null,
        ie: null,
        telefone: null,
        email: null
      } :  {
        id: element.id,
        nome: element.nome,
        cnpjCpf: element.cnpjCpf,
        ie: element.ie,
        telefone: element.telefone,
        email: element.email,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
      //this.table.ngOnInit()
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

    deleteCliente( id: number): void {
      this.service.Delete(id).subscribe(()=>{
        this.ngOnInit();
      })
        
    }

    editCliente(element: ClienteFornecedor): void {
      this.openDialog(element);

    }



  }

