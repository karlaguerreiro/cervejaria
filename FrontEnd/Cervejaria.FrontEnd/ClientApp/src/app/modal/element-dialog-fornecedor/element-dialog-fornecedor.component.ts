import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.Service';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-element-dialog-fornecedor',
  templateUrl: './element-dialog-fornecedor.component.html',
  styleUrls: ['./element-dialog-fornecedor.component.css']
})
export class ElementDialogFornecedorComponent implements OnInit {
  showDiv!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ClienteFornecedor,
    public dialogRef: MatDialogRef<ElementDialogFornecedorComponent>,
    private service: ClienteFornecedorService,
  ) {}

  ngOnInit(): void {
    if (this.data.id != null) {
      this.showDiv = true;
    } else {
      this.showDiv = false;

    }
  }
  Update(fornecedor: ClienteFornecedor) {
    this.service.alterarFornecedor(fornecedor).subscribe(
      () => {
        this.dialogRef.close();
      }
    );
  }
  onCancel(): void {
    this.dialogRef.close()
  }
}
