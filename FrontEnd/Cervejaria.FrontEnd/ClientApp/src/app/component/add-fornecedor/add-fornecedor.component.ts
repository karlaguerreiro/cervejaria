import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { DtoClienteFornecedor } from 'src/app/DTOs/DtoClienteFornecedor';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';
import { DtoEndereco } from 'src/app/DTOs/DtoEndereco';
import { DtoContato } from 'src/app/DTOs/DtoContato';

@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {
  fornecedorForm: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(1);
  tipos: tipoUsuario[] = [
    { value: 1, viewValue: 'Fornecedor' },
  ];
  dataSource: any;


  constructor(
  private _formBuilder: FormBuilder, 
  private _FornecedorService: ClienteFornecedorService
  ) 
    {
    this.fornecedorForm = this._formBuilder.group({
      nome: ['', Validators.required],
      cpf_cnpj: ['', Validators.required],
      ie: ['', Validators.required],
      tipo: [1, Validators.required],
      id_contato: [],
      id_endereco: [],

      // Tabela Endereço
      
      cep: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],


      //Tabela Contato
     
      contato: ['', Validators.required],
      email: ['', Validators.email],
      telefone: ['', Validators.required],


  })
  }
  ngOnInit() { }

  public Save() {
    console.log(JSON.stringify(this.fornecedorForm.value));
    if(this.fornecedorForm.valid) {
      const endereco: DtoEndereco= {
        cep: this.fornecedorForm.value.cep,
        complemento: this.fornecedorForm.value.complemento,
        numero: this.fornecedorForm.value.numero,
      };

    const contato: DtoContato = {
      email: this.fornecedorForm.value.email,
      telefone: this.fornecedorForm.value.telefone,
      contato: this.fornecedorForm.value.contato,
    };

    const fornecedor: DtoClienteFornecedor = {
      nome: this.fornecedorForm.value.nome,
      cpf_cnpj: this.fornecedorForm.value.cpf_cnpj,
      ie: this.fornecedorForm.value.ie,
      tipo: this.fornecedorForm.value.tipo,
      id_contato: this.fornecedorForm.value.id_contato,
      id_endereco: this.fornecedorForm.value.id_endereco,
    };
      
  }
}
}
