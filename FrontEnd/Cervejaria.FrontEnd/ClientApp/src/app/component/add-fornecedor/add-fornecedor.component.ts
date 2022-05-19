import { Component, Input, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormControl, 
  FormGroup, 
  Validators, 
} from '@angular/forms';
import { tipoUsuario } from 'src/app/Models/TipoUsuario';
import { FornecedorService } from 'src/app/Service/Fornecedor.service';
import { DtoClienteFornecedor } from 'src/app/DTOs/DtoClienteFornecedor';

@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {
  firstFormGroup: FormGroup;
  @Input()
  tipoControl: FormControl = new FormControl(0);
  tipos: tipoUsuario[] = [
    { value: 0, viewValue: 'Cliente' },
    { value: 1, viewValue: 'Fornecedor' },
  ];
  dataSource: any;
  
  
  constructor(
    private _formBuilder: FormBuilder,
    private fornecedorService: FornecedorService
  ) 
    {this.firstFormGroup = this._formBuilder.group({
    nome : ['',Validators.required],
    cpf_cnpj: ['',Validators.required],
    ie: ['',Validators.required],
    tipo: ['',Validators.required],


    //Tabela Endereço
    Endereco: this._formBuilder.group({
      cep: ['',Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
    }),    


    //Tabela Contato
    Contato: this._formBuilder.group({
      contato: ['', Validators.required],
      email: ['', Validators.email],
      telefone: ['', Validators.required],
      }),
  })}

  ngOnInit(): void { }

  Save() {
    //console.log(this.firstFormGroup.value);
    console.log(JSON.stringify(this.firstFormGroup.valid));
    if (this.firstFormGroup.valid) {
      const dtoclientefornecedor: DtoClienteFornecedor = {
        nome : this.firstFormGroup.value.nome,
        cpf_cnpj: this.firstFormGroup.value.cpf_cnpj,
        ie: this.firstFormGroup.value.ie,
        tipo: this.firstFormGroup.value.tipo,
        id_endereco: this.firstFormGroup.value.id_endereco,    
        id_contato: this.firstFormGroup.value.id_contato,
      }
      
      this.fornecedorService.inserirFornecedor(dtoclientefornecedor).subscribe(
        (response) => {
          console.log(response);
          this.ngOnInit();
        }
      );
    }
  }
}
