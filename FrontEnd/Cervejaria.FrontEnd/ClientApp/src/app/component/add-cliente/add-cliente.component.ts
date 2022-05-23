import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';
import { DtoContato } from './../../DTOs/DtoContato';
import { DtoEndereco } from './../../DTOs/DtoEndereco';
import { DtoClienteFornecedor } from 'src/app/DTOs/DtoClienteFornecedor';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
})
export class AddClienteComponent implements OnInit {
  clienteForm!: FormGroup;

  @Input()
  tipoControl: FormControl = new FormControl(0);
  tipos: tipoUsuario[] = [
    { value: 0, viewValue: 'Cliente' }
  ];
  dataSource: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _clienteService: ClienteFornecedorService
  ) {
    this.clienteForm = this._formBuilder.group({
      nome: ['', Validators.required],
      cnpjCpf: ['', Validators.maxLength(15)],
      ie: ['', Validators.max(3)],
      tipo: this.tipoControl.value,

      //Contato
      telefone: ['', Validators.required],
      contato1: ['', Validators.required],
      email: ['', Validators.email],

      //Endereço
      cep: ['', Validators.max(8)],
      numero: [0, Validators.required],
      complemento: ['', Validators.required],

    });
  }

  ngOnInit(): void { }

  public async Save() {
    console.log(JSON.stringify(this.clienteForm.value));
    if (this.clienteForm.valid) {
      const cliente: DtoClienteFornecedor= {
        nome: this.clienteForm.value.nome,
        cpf_cnpj : this.clienteForm.value.cnpjCpf,
        ie: this.clienteForm.value.ie,
        tipo: this.clienteForm.value.tipo,
      }
      const endereco: DtoEndereco = {
        cep: this.clienteForm.value.cep,
        complemento: this.clienteForm.value.complemento,
        numero: this.clienteForm.value.numero,
      };
      const contato: DtoContato = {
        email: this.clienteForm.value.email,
        telefone: this.clienteForm.value.telefone,
        contato: this.clienteForm.value.contato1,
      };
  
 
      const payload = {
        ...cliente,
        contato,
        endereco
      };

      this._clienteService.Save(payload);

      console.log(payload);
    }
  }
}
