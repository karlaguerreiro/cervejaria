import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, 
          FormControl, 
          FormGroup, 
          Validators 
} from '@angular/forms';
import { InsumoService } from 'src/app/Service/insumo.service';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { window, windowToggle } from 'rxjs';

@Component({
  selector: 'app-add-insumo',
  templateUrl: './add-insumo.component.html',
  styleUrls: ['./add-insumo.component.css']
})


export class AddInsumoComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  control!: FormControl;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private _formBuilder: FormBuilder, 
    private insumoService: InsumoService){}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      preco_unit: [0, Validators.required],
      nome: ['', Validators.required],
      dataCompra: [new Date(),  Validators.required],
      unidademed: ['', Validators.required],
      validade: [new Date(), Validators.required],
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
