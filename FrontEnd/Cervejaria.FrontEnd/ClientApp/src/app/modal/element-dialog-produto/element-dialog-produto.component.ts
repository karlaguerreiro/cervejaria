import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DtoProduto } from 'src/app/DTOs/DtoProduto';
import { ProdutoService } from 'src/app/Service/Produto.service';

@Component({
  selector: 'app-element-dialog-produto',
  templateUrl: './element-dialog-produto.component.html',
  styleUrls: ['./element-dialog-produto.component.css']
})
export class ElementDialogProdutoComponent implements OnInit {
  showDiv!: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: DtoProduto,
    public dialogRef: MatDialogRef<ElementDialogProdutoComponent>,
    private service: ProdutoService
  ) {}


  ngOnInit(): void {
    if (this.data.id != null) {
      this.showDiv = true;
    } else {
      this.showDiv = false;
    }
  }

  Update(element: DtoProduto) {
    this.service.alterarProduto(element).subscribe(
      payload => {
        this.dialogRef.close(payload);
      });
  }
  
  onCancel(): void {
    this.dialogRef.close()
  }

}
