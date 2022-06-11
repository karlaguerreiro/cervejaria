import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { DtoClienteFornecedor } from 'src/app/DTOs/DtoClienteFornecedor';
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';
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
    public data: DtoClienteFornecedor,
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
  Update(element: DtoClienteFornecedor) {
    this.service.alterarFornecedor(element).subscribe(
      {
        next: base => {
          console.log(base);
        }
      });
  }
  onCancel(): void {
    this.dialogRef.close()
  }
}
