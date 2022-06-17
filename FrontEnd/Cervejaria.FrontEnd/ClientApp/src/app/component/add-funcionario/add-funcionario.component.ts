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
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  @Input()
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
      infoUsuarios: (this.secondFormGroup = this._formBuilder.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.maxLength(15)],
        dataNasc: ['', Validators.required],
      })),
      //Contato
      contato: (this.thirdFormGroup = this._formBuilder.group({
        contato1: ['', Validators.required],
        email: ['', Validators.email],
        telefone: ['', Validators.required],
      })),
      //Endereco
      endereco: (this.fourthFormGroup = this._formBuilder.group({
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['', Validators.required],
      })),
      //Emprego anterior
      emprego: (this.fifthFormGroup = this._formBuilder.group({
        empresa: ['', Validators.required],
        cargo: ['', Validators.required],
        dataEntrada: ['', Validators.required],
        dataSaida: ['', Validators.required],
      })),
      //Cargo a exercer
      cargo: (this.sixthFormGroup = this._formBuilder.group({
        funcao: ['', Validators.required],
        descricao: ['', Validators.required],
      })),
    });
  }

  ngOnInit(): void {}

  public async Save() {
    this._funcionarioService
      .Save(this.funcionarioForm.value)
      .subscribe((response: any) => {
        console.log(response);
        this.ngOnInit();
      });
  }
}
