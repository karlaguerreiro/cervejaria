import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InsumoService } from 'src/app/Service/list-insumo.service';

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
  constructor(private _formBuilder: FormBuilder, private insumoService: InsumoService)
  {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      tituloInsumo: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoDePreparo: ['', Validators.required],
    });
  }

  public Save()
  {
    console.log(this.firstFormGroup.value)
    this.insumoService.inserirInsumos(this.firstFormGroup.value);
  }
}
