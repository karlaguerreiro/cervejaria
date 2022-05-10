import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InsumoService } from 'src/app/Service/insumo.service';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { window, windowToggle } from 'rxjs';

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
      Preco: [0, Validators.required],
      nome: ['', Validators.required],
      dataCompra: [new Date(),  Validators.required],
      unidademed: ['', Validators.required],
    });
}

  public Save()
  {
    this.firstFormGroup.value.dataCompra = this.firstFormGroup.value.dataCompra.toISOString();
    var test = this.insumoService.inserirInsumos(this.firstFormGroup.value);
    console.log(test);
    this.ngOnInit();
  }
}
