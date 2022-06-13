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
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {
  fornecedorForm: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(1);
  tipos: tipoUsuario[] = [
    { value: 1, viewValue: 'Fornecedor' },
  ];
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
  private _formBuilder: FormBuilder,
  private _FornecedorService: ClienteFornecedorService
  ){
    this.fornecedorForm = this._formBuilder.group({
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
    this._FornecedorService.Save(this.fornecedorForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();      
      }
    )
   
}
}
