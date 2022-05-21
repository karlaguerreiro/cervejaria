import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FuncionarioService } from 'src/app/Service/Funcionario.service';

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

      //Contato
      Contato: (this.funcionarioForm = this._formBuilder.group({
        contato: ['', Validators.required],
        email: ['', Validators.email],
        telefone: ['', Validators.required],
      })),
      //Endereco
      Endereco: (this.funcionarioForm = this._formBuilder.group({
        cep: ['', Validators.max(8)],
        complemento: ['', Validators.required],
        numero: [0, Validators.required],
      })),
      //Emprego anterior
      EmpregoAnterior: (this.funcionarioForm = this._formBuilder.group({
        empresa: ['', Validators.required],
        cargo: ['', Validators.required],
        dataEntrada: ['', Validators.required],
        dataSaida: ['', Validators.required],
      })),
      //Info Usuario
      InfoUsuario: (this.funcionarioForm = this._formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      }))
    });
  }

  ngOnInit() {}

  public Save() {
    console.log(this.funcionarioForm.value);
    this._funcionarioService
      .inserirFuncionario(this.funcionarioForm.value)
      .subscribe((response) => {
        console.log(response);
        this.ngOnInit();
      });
  }
}
