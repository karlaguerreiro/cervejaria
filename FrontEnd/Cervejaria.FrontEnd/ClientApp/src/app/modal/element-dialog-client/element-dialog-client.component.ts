import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';
import { DtoClienteFornecedor } from 'src/app/DTOs/DtoClienteFornecedor';
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';
import { ElementDialogComponent } from '../element-dialog/element-dialog.component';

@Component({
  selector: 'app-element-dialog-client',
  templateUrl: './element-dialog-client.component.html',
  styleUrls: ['./element-dialog-client.component.css']
})
export class ElementDialogClientComponent implements OnInit {
  showDiv!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ClienteFornecedor,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    private service: ClienteFornecedorService
  ) { }

  ngOnInit(): void {
    if (this.data.id != null) {
      this.showDiv = true;
    }else {
      this.showDiv = false;

    }
  }
  Update(element: ClienteFornecedor){
    this.service.Edit(element).subscribe(
  { next: (base: any) => {
    console.log(base);
  }
})
  }
  onCancel(): void {
    this.dialogRef.close()
  }
}
