import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DtoReceita } from 'src/app/DTOs/DtoReceita';
import { Receita } from 'src/app/Models/Receita';
import { ReceitaService } from 'src/app/Service/receita.service';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {
  showDiv!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: DtoReceita,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    private service: ReceitaService
  ) {}

  ngOnInit(): void {
    if (this.data.id != null) {
      this.showDiv = true;
    }else {
      this.showDiv = false;

    }
  }
  Update(receita: DtoReceita){
    this.service.alterarReceita(receita).subscribe(
  { next: base => {
    console.log(base);
  }});
}

  onCancel(): void {
    this.dialogRef.close()
  }

}
