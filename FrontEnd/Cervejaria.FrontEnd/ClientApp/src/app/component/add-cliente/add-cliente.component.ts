import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.Service';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
})
export class AddClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
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
      ie: ['', Validators.required],
      tipo: this.tipoControl.value,
      Contato: (this.secondFormGroup = this._formBuilder.group({
        Telefone: ['', Validators.required],
        Contato1: ['', Validators.required],
        Email: ['', Validators.email],
      })),
      endereco: (this.thirdFormGroup = this._formBuilder.group({
        cep: ['', Validators.required],
        numero: [0, Validators.required],
        complemento: ['', Validators.required],
      }))});
  }

  ngOnInit(): void { }

  public async Save() {
      this._clienteService.Save(this.clienteForm.value).subscribe(
        (response: any) => {
          console.log(response);
          this.ngOnInit();                       
        }
        
      );
  
  }
}
