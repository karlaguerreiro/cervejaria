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
  ngOnInit() { }

  public Save() {
    this._FornecedorService.Save(this.fornecedorForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
      }
    );
}
}
