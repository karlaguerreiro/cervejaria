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
import { DtoInfoUsuario } from 'src/app/DTOs/DtoInfoUsuario';
import { DtoUsuario } from 'src/app/DTOs/DtoUsuario';
import { DtoCargo } from 'src/app/DTOs/DtoCargo';
import { DtoEmpregoAnterior } from 'src/app/DTOs/DtoEmpregoAnterior';

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
      //Info Usuario
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],

      //Contato
      contato: ['', Validators.required],
      email: ['', Validators.email],
      telefone: ['', Validators.required],

      //Endereco
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],

      //Emprego anterior
      empresa: ['', Validators.required],
      cargo: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],

      //Usuario
      nomeUsuario: ['', Validators.required],
      senha: ['', Validators.required],
      nivelAcesso: ['', Validators.required],
    });
  }

  ngOnInit() {}

  // TODO terminar de criar o componente

  public async Save() {
    console.log(JSON.stringify(this.funcionarioForm.valid));
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
      const emprego: DtoEmpregoAnterior = {
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

      const info_usuario: DtoInfoUsuario = {
        nome: this.funcionarioForm.value.nome,
        cpf: this.funcionarioForm.value.cpf,
        data_nasc: this.funcionarioForm.value.dataNascimento,
        // POST Endereco, return id
        id_endereco: await this._funcionarioService.createEndereco(endereco),
        // POST Cargo,  return id
        id_cargo: await this._funcionarioService.createCargo(cargo),
        // POST Contato, return id
        id_contato: await this._funcionarioService.createContato(contato),
        // POST Emprego Anterior,  return id
        id_emprego: await this._funcionarioService.createEmpregoAnterior(
          emprego
        ),
        // POST Usuario,  return id
        id_usuario: await this._funcionarioService.createUsuario(usuario),
      };

      const idInfoUsuario = await this._funcionarioService.createInfoUsuario(
        info_usuario
      );
    }
  }
}
