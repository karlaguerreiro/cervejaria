import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { ClienteService } from 'src/app/Service/Cliente.Service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})

export class AddClienteComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  tipos: tipoUsuario[] = [
    {value: 0, viewValue: 'Cliente'},
    {value: 1, viewValue: 'Fornecedor'},
  ];
  dataSource: any;
  constructor(private _formBuilder: FormBuilder,private _clienteService: ClienteService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      Nome: [''],
      Tipo: this.tipoControl.value,
      CnpjCpf: [''],
      Ie: [''],
      Contato: this.secondFormGroup = this._formBuilder.group({
            Telefone: ['', Validators.required],
            Contato1: ['', Validators.required],
            Email: ['', Validators.email]
      }),
      Endereco: this.thirdFormGroup = this._formBuilder.group({
        CEP: ['', Validators.max(8)],
        Numero: [0, Validators.required],
        Complemento: ['', Validators.required]
  })
    });
  }

  Save(){
    //console.log(this.firstFormGroup.value);
    var x = this._clienteService.inserirClientes(this.firstFormGroup.value).subscribe(
      { next: (base: any) => {
        let x = base;
        this.firstFormGroup.value.Nome = x.data.nome;
        this.firstFormGroup.value.Tipo = x.data.tipo;
        this.firstFormGroup.value.CnpjCpf = x.data.cnpjCpf;
        this.firstFormGroup.value.Ie = x.data.ie;
        console.log(this.firstFormGroup.value);
      }});
  }
}

