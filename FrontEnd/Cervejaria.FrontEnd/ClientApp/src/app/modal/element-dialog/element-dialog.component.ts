import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/component/list-receita/list-receita.component'

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement; 
  showDiv!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}
    
  ngOnInit(): void {

    if (this.data.codigo != null) {
      this.showDiv = true;
      
    }else {
      this.showDiv = false;
  
    }
  }
  
  onCancel(): void {
    this.dialogRef.close()
  }

}
