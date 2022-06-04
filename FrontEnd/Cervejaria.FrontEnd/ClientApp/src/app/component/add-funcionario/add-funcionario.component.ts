import { DtoContato } from './../../DTOs/DtoContato';
import { DtoEndereco } from './../../DTOs/DtoEndereco';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FuncionarioService } from 'src/app/Service/Funcionario.service';
import { DtoUsuario } from 'src/app/DTOs/DtoUsuario';
import { DtoCargo } from 'src/app/DTOs/DtoCargo';
import { DtoEmpresa } from 'src/app/DTOs/DtoEmpresa';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css'],
})
export class AddFuncionarioComponent implements OnInit {
  funcionarioForm: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private _formBuilder: FormBuilder,
    private _funcionarioService: FuncionarioService
  ) {
    this.funcionarioForm = this._formBuilder.group({
      //Usuario
      nomeUsuario: ['', Validators.required],
      senha: ['', Validators.required],
      nivelAcesso: ['', Validators.required],
      //Info Usuario
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      data_nasc: ['', Validators.required],

      //Endereco
      cep: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],

      //Contato
      contato: ['', Validators.required],
      email: ['', Validators.email],
      telefone: ['', Validators.required],

      //Emprego anterior
      empresa: ['', Validators.required],
      cargo: ['', Validators.required],
      data_entrada: ['', Validators.required],
      data_saida: ['', Validators.required],
      
      //Cargo a exercer
      funcao: ['', Validators.required],
      descricao: ['', Validators.required],

      // //trashvalues
      // cidade: ['', Validators.required],
      // estado: ['', Validators.required],

    });
  }

  ngOnInit() {}

  public async Save() {
    console.log(JSON.stringify(this.funcionarioForm.value));
    if (this.funcionarioForm.valid) {
      const endereco: DtoEndereco = {
        cep: this.funcionarioForm.value.cep,
        complemento: this.funcionarioForm.value.complemento,
        numero: this.funcionarioForm.value.numero,
      };
      const contato: DtoContato = {
        email: this.funcionarioForm.value.email,
        telefone: this.funcionarioForm.value.telefone,
        contato: this.funcionarioForm.value.contato,
      };
      const usuario: DtoUsuario = {
        nome_usuario: this.funcionarioForm.value.nomeUsuario,
        senha: this.funcionarioForm.value.senha,
        nivel_acesso: this.funcionarioForm.value.nivelAcesso,
      };
      //Emprego Anterior
      const emprego: DtoEmpresa = {
        empresa: this.funcionarioForm.value.empresa,
        cargo: this.funcionarioForm.value.cargo,
        data_entrada: this.funcionarioForm.value.dataEntrada,
        data_saida: this.funcionarioForm.value.dataSaida,
      };
      //Cargo á exercer
      const cargo: DtoCargo = {
        funcao: this.funcionarioForm.value.funcao,
        // salario: this.funcionarioForm.value.salario,
        // data_admissao: this.funcionarioForm.value.dataAdmissao,
        // data_demissao: this.funcionarioForm.value.dataDemissao,
        descricao: this.funcionarioForm.value.descricao,
      };

      const payload = {
        ...usuario,
        infoUsuarios: [
          {
            endereco,
            contato,
            emprego,
            cargo,
          },
        ],
      };

      this._funcionarioService.inserirFuncionario(payload);

      console.log(payload);
    }
  }
}
