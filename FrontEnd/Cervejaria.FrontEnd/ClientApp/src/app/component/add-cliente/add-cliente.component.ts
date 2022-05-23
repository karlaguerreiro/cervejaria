import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { ClienteFornecedorService } from 'src/app/Service/ClienteFornecedor.service';
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
      contato: this._formBuilder.group({
      telefone: [''],
      contato1: [''],
      email: [''],
      }),
      endereço: this._formBuilder.group({
      cep: ['', Validators.max(8)],
      numero: [0, Validators.required],
      complemento: ['', Validators.required],
      })
    });
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
