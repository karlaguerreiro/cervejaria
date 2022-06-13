import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DtoInsumo } from 'src/app/DTOs/DtoInsumo';
import { InsumoService } from 'src/app/Service/insumo.service';
import { ReceitaService } from 'src/app/Service/receita.service';

@Component({
  selector: 'app-add-receita',
  templateUrl: './add-receita.component.html',
  styleUrls: ['./add-receita.component.css']
})
export class AddReceitaComponent implements OnInit {
  receitaForm!: FormGroup;
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

    this.receitaForm = this._formBuilder.group({
      nome: ['', Validators.required],
      InsumoReceitas: [...this.clickedRows],
      descricao: ['', Validators.required]
    });
  }

  public Save()
  {
    var x = [...this.clickedRows];
    x.forEach(el => { el.IdInsumo = el.id });
    this.receitaForm.value.InsumoReceitas = x;
    console.log('obj', this.receitaForm.value);

    this.receitaService.inserirReceita(this.receitaForm.value).subscribe(
      { next: base =>
        console.log(base.data)
      });


    this.ngOnInit();
  }
}

