import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InsumoService } from 'src/app/Service/Insumo.service';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { DtoInsumo } from 'src/app/DTOs/DtoInsumo';

@Component({
  selector: 'app-add-insumo',
  templateUrl: './add-insumo.component.html',
  styleUrls: ['./add-insumo.component.css'],
})
export class AddInsumoComponent implements OnInit {
  firstFormGroup: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private _formBuilder: FormBuilder,
    private insumoService: InsumoService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      fornecedor: ['', Validators.required],
      dataCompra: ['', Validators.required],
      valorUnitario: ['', Validators.required],
      validade: ['', Validators.required],
      unidadeMedida: ['', Validators.required],
    });
  }

  ngOnInit() { }

  public Save() {
    console.log(JSON.stringify(this.firstFormGroup.valid));
    if (this.firstFormGroup.valid) {
      const dtoInsumo: DtoInsumo = {
        nome: this.firstFormGroup.value.nome,
        dataCompra: this.firstFormGroup.value.dataCompra,
        precoUnit: this.firstFormGroup.value.valorUnitario,
        unidMedida: this.firstFormGroup.value.unidadeMedida,
        idFornecedor: this.firstFormGroup.value.fornecedor,
        validade: this.firstFormGroup.value.validade
      }
      this.insumoService.inserirInsumo(dtoInsumo).subscribe(
        (response) => {
          console.log(response);
          this.ngOnInit();
        }
      );
    }
    // this.firstFormGroup.value.dataCompra = this.firstFormGroup.value.dataCompra.toISOString();
    // var test = this.insumoService.inserirInsumos(this.firstFormGroup.value);
    // console.log(test);

  }
}
