import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { DtoClienteFornecedor } from 'src/app/DTOs/DtoClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.Service';

@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tFormGroup: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  tipos: tipoUsuario[] = [
    { value: 0, viewValue: 'Cliente' },
    { value: 1, viewValue: 'Fornecedor' },
  ];
  dataSource: any;


  constructor(private _formBuilder: FormBuilder, private _clienteFornecedorService: ClienteFornecedorService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      cpf_cnpj: ['', Validators.required],
      ie: ['', Validators.required],
      tipo: ['', Validators.required],

      // Tabela Endereço
      Endereco: (this.secondFormGroup = this._formBuilder.group({
      cep: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
    })),

      //Tabela Contato
      Contato: (this.tFormGroup = this._formBuilder.group({
      contato: ['', Validators.required],
      email: ['', Validators.email],
      telefone: ['', Validators.required],

    })),
  })
  }
  ngOnInit() { }

  public Save() {
      this._clienteFornecedorService.Save(this.firstFormGroup.value).subscribe(
        (response: any) => {
          console.log(response);
          this.ngOnInit();
        }
      );
  }
}
