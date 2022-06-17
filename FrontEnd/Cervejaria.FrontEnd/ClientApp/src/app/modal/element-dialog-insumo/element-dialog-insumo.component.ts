import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { InsumoService } from 'src/app/Service/insumo.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Insumo } from 'src/app/Models/Insumo';
@Component({
  selector: 'app-element-dialog-insumo',
  templateUrl: './element-dialog-insumo.component.html',
  styleUrls: ['./element-dialog-insumo.component.css']
})
export class ElementDialogInsumoComponent implements OnInit {
  showDiv!: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Insumo,
    public dialogRef: MatDialogRef<ElementDialogInsumoComponent>,
    private service: InsumoService,
 
  ){};


  ngOnInit(): void {
    if (this.data.id != null) {
      this.showDiv = true;
    }else{
      this.showDiv = false;
    }
  }

  Update(insumo: Insumo) {
    this.service.alterarInsumo(insumo).subscribe(
      () => {
        this.dialogRef.close();
      }
    );
  }
  onCancel(): void {
    this.dialogRef.close()
  }


}
