import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReceitaService } from 'src/app/Service/receita.service';

@Component({
  selector: 'app-add-receita',
  templateUrl: './add-receita.component.html',
  styleUrls: ['./add-receita.component.css']
})
export class AddReceitaComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  control!: FormControl;
  constructor(private _formBuilder: FormBuilder,  private receitaService: ReceitaService)
  {
    this.control = _formBuilder.control({value: 'my val', disabled: true});
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      tituloReceita: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoDePreparo: ['', Validators.required]
    });
  }

  public Save()
  {
    var test = this.receitaService.inserirReceitas(this.firstFormGroup.value);
    console.log('teste',this.firstFormGroup.value);
    this.ngOnInit();
  }
}
