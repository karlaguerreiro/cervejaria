import { Funcionario } from '../Models/Funcionario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { DtoEndereco } from '../DTOs/DtoEndereco';
import { DtoCargo } from '../DTOs/DtoCargo';
import { DtoContato } from '../DTOs/DtoContato';
import { DtoEmpresa } from '../DTOs/DtoEmpresa';
import { DtoUsuario } from '../DTOs/DtoUsuario';
import { DtoInfoUsuario } from '../DTOs/DtoInfoUsuario';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable()
export class FuncionarioService {
  constructor(private http: HttpClient) {}
  protected UrlServiceV1: string = 'https://cervejaria-api.herokuapp.com/';

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  public obterFuncionarios(): Observable<BaseResponse<Funcionario[]>> {
    return this.http.get<BaseResponse<Funcionario[]>>(
      this.UrlServiceV1 + 'api/V1/Usuario'
    );
  }

  public inserirFuncionario(funcionario: Funcionario ): Observable<BaseResponse<Funcionario>> {
    return this.http.post<BaseResponse<any>>(
      this.UrlServiceV1 + 'api/V1/Usuario',
      funcionario,
      this.headerOptions
    );
  }
}