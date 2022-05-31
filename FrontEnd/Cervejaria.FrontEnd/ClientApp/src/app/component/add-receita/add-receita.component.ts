import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DtoInsumo } from 'src/app/DTOs/DtoInsumo';
import { InsumoService } from 'src/app/Service/Insumo.service';
import { ReceitaService } from 'src/app/Service/Receita.service';

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
  displayedColumns: string[] = ['nome', 'dataCompra','undMedida', 'precoUnit'];
  dataSource: any;
  clickedRows = new Set<DtoInsumo>();
  constructor(private _formBuilder: FormBuilder,  private receitaService: ReceitaService, private insumoService: InsumoService)
  {

  }

  ngOnInit() {
    this.insumoService.obterInsumos().subscribe(
      { next: base => {
        let x = base;
        this.dataSource = x.data;
        console.log(this.dataSource);
      }});
    this.firstFormGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      InsumoReceitas: [this.clickedRows.values],
      descricao: ['', Validators.required]
    });
  }

  public Save()
  {
    this.receitaService.inserirReceita(this.firstFormGroup.value).subscribe(
      { next: base =>
        console.log(base.data)
      });
    console.log('teste',this.firstFormGroup.value);
    this.ngOnInit();
  }
}

