import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,
         FormControl, 
         FormGroup, 
         Validators 
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { ClienteService } from 'src/app/Service/Cliente.Service';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})


export class AddFuncionarioComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  dataSource: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      Nome: [''],
      Cpf: [''],
      Contato: (this.secondFormGroup = this._formBuilder.group({
        Telefone: ['', Validators.required],
        Contato1: ['', Validators.required],
        Email: ['', Validators.email],
      })),
      Endereco: (this.thirdFormGroup = this._formBuilder.group({
        CEP: ['', Validators.max(8)],
        Numero: [0, Validators.required],
        Complemento: ['', Validators.required],
      })),
      EmpregoAnterior: (this.fourthFormGroup = this._formBuilder.group({
        Empresa: ['', Validators.required],
        Cargo: ['', Validators.required],
      })),
      EmpregoAtual: (this.fifthFormGroup = this._formBuilder.group({
        Funcao: ['', Validators.required],
        Descricao: ['', Validators.required],
      })),
    });
  }
// TODO terminar de criar o componente



  Save() {
    //console.log(this.firstFormGroup.value);
    var x = this._clienteService
      .inserirClientes(this.firstFormGroup.value)
      .subscribe({
        next: (base: any) => {
          let x = base;
          this.firstFormGroup.value.Nome = x.data.nome;
          this.firstFormGroup.value.CnpjCpf = x.data.cpf;
          console.log(this.firstFormGroup.value);
        },
      });
  }

}
