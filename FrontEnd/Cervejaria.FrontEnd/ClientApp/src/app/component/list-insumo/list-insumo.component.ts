import { Component, OnInit } from '@angular/core';
import { InsumoService } from 'src/app/Service/insumo.service';

@Component({
  selector: 'app-list-insumo',
  templateUrl: './list-insumo.component.html',
  styleUrls: ['./list-insumo.component.css'],
})

export class ListInsumoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'dataCompra','valor' , 'precoUnit'];
  dataSource: any;
  constructor(private insumoService: InsumoService) {
   }

   ngOnInit(): void {
     this.insumoService.obterInsumos().subscribe(
      { next: base => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);
      }}
    );
  }
}
