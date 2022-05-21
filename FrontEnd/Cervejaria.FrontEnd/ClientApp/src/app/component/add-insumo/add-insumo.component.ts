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
import { ClienteFornecedor } from 'src/app/Models/ClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.Service';

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
  fornecedores!: ClienteFornecedor[];
  idClienteFornecedor!: number;

  constructor(private _formBuilder: FormBuilder, private _insumoService: InsumoService, _clienteFornecedorService: ClienteFornecedorService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      idClienteFornecedor: [0, Validators.required],
      dataCompra: [Date, Validators.required],
      valorUnitario: [0, Validators.required],
      validade: [Date, Validators.required],
      unidadeMedida: ['', Validators.required],
    });
    _clienteFornecedorService.GetByType(1).subscribe(
      (response: any) => {
        this.fornecedores = response.data;
        console.log(response.data);
      }
    );
  }

  ngOnInit() { }

  public Save() {
      let dtoInsumo: DtoInsumo = {
        nome: this.firstFormGroup.value.nome,
        dataCompra: this.firstFormGroup.value.dataCompra,
        precoUnit: this.firstFormGroup.value.valorUnitario,
        unidMedida: this.firstFormGroup.value.unidadeMedida,
        idClienteFornecedor: this.firstFormGroup.value.idFornecedor,
        validade: this.firstFormGroup.value.validade
      }
      this._insumoService.inserirInsumo(this.firstFormGroup.value).subscribe(
        (response) => {
          console.log(response);
          this.ngOnInit();
        }
      );
    // this.firstFormGroup.value.dataCompra = this.firstFormGroup.value.dataCompra.toISOString();
    // var test = this.insumoService.inserirInsumos(this.firstFormGroup.value);
    // console.log(test);
  }
}
