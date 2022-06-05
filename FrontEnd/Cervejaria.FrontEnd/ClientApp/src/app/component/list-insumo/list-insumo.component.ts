import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DtoInsumo } from 'src/app/DTOs/DtoInsumo';
import { InsumoService } from 'src/app/Service/Insumo.service';

@Component({
  selector: 'app-list-insumo',
  templateUrl: './list-insumo.component.html',
  styleUrls: ['./list-insumo.component.css'],
})

export class ListInsumoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'dataCompra', 'undMedida', 'precoUnit'];
  public dataSource: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DtoInsumo[], private insumoService: InsumoService,public dialogRef: MatDialogRef<ListInsumoComponent>) {}

   ngOnInit(): void {
     if (this.data !== null || this.data !== undefined)
    {
      this.dataSource = this.data;
    }
    else{
     this.insumoService.obterInsumos().subscribe(
      { next: base => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);
      }});
    }
    }

  onCancel(): void {
    this.dialogRef.close()
  }


}
