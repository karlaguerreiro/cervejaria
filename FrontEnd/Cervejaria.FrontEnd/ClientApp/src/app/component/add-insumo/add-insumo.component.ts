import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { InsumoService } from 'src/app/Service/insumo.service';

@Component({
  selector: 'app-add-insumo',
  templateUrl: './add-insumo.component.html',
  styleUrls: ['./add-insumo.component.css']
})
export class AddInsumoComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  control!: FormControl;
  matDatepicker = new Date;
  data!: Date;
  constructor(private _formBuilder: FormBuilder, private insumoService: InsumoService)
  {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      dataCompra: [Date,  Validators.required],
      modoDePreparo: [''],
      unidademed: ['', Validators.required],
    });
  }

  public Save()
  {
    this.firstFormGroup.value.dataCompra = this.firstFormGroup.value.dataCompra.toISOString()
    console.log(this.firstFormGroup.value)
    this.insumoService.inserirInsumos(this.firstFormGroup.value.dataCompra.toISOString);
  }
  public GetDate(matDatepicker: Date): string {
    if(matDatepicker === null || matDatepicker === undefined)
      matDatepicker = new Date;
    return matDatepicker.toISOString();
  }
}
