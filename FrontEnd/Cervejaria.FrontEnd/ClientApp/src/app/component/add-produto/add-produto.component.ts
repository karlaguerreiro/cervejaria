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
  produtoForm!:FormGroup;
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private _formBuilder: FormBuilder,
    private produtoService:ProdutoService) {
      this.produtoForm =this._formBuilder.group({
        nome:['',Validators.required],
        descricao:['',Validators.required],
        fabricacao:['',Validators.required], 
        validade:['',Validators.required], 
        quantidade:['',Validators.required],
        unidadeMedida:['',Validators.required],    
      })
     }
  

  ngOnInit(): void {

  }

  public async Save() {
    this.produtoService.Save(this.produtoForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();      
      }
    )
   
}

}

/* */