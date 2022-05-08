import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InsumoService } from 'src/app/Service/insumo.service';

@Component({
  selector: 'app-add-insumo',
  templateUrl: './add-insumo.component.html',
  styleUrls: ['./add-insumo.component.css']
})
export class AddInsumoComponent implements OnInit {
  isLinear!: true;
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
      tituloInsumo: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoDePreparo: ['', Validators.required],
      nome: ['', Validators.required],
      dataCompra: [Date,  Validators.required],
      unidademed: ['', Validators.required],
    });
  }

  public Save()
  {
    this.firstFormGroup.value.dataCompra = this.firstFormGroup.value.dataCompra.toISOString()
    console.log(this.firstFormGroup.value)
    this.insumoService.inserirInsumos(this.firstFormGroup.value);
    this.insumoService.inserirInsumos(this.firstFormGroup.value.dataCompra.toISOString);
  }
}
