import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  control!: FormControl;
  constructor(private _formBuilder: FormBuilder)
  {
    this.control = _formBuilder.control({value: 'my val', disabled: true});
  }
  // private _formBuilder: any;

  // constructor() {
  //   this.control = this._formBuilder.control({value: 'my val', disabled: true});
  // }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nomeFornecedor: ['', Validators.required],
      cnpj: ['', Validators.required],
      produto: ['', Validators.required]
    });
  }
  }


