import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private _formBuilder: FormBuilder)
  {
    this.control = _formBuilder.control({value: 'my val', disabled: true});
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      tituloReceita: ['', Validators.required],
      ingredientes: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      modoDePreparo: ['', Validators.required],
    })
  }

  public Save()
  {
    //var x = this.firstFormGroup.controls('tituloReceita')
  }
}
