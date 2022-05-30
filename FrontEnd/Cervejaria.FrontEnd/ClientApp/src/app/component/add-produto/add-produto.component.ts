import { Component, OnInit } from '@angular/core';
import { FormBuilder,
         FormControl, 
         FormGroup, 
         Validators, 
} from '@angular/forms';
import { ProdutoService } from 'src/app/Service/Produto.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
  firstFormGroup!:FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private produtoService:ProdutoService) { }
  

  ngOnInit(): void {
    this.firstFormGroup=this._formBuilder.group({
      nome:['',Validators.required],
      descricao:['',Validators.required],
      fabricacao:['',Validators.required], 
      validade:['',Validators.required], 
      quantidade:['',Validators.required],
      unidadeMedida:['',Validators.required],    
    })
  }

}

/* */