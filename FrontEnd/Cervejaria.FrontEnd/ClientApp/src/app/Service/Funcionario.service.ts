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

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  protected UrlServiceV1: string = 'https://cervejaria-api.herokuapp.com/';

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  public obterFuncionarios(): Observable<BaseResponse<Funcionario[]>> {
    return this.http.get<BaseResponse<Funcionario[]>>(
      this.UrlServiceV1 + 'api/V1/Usuario'
    );
  }

  public inserirFuncionario(
    funcionario : any
  ): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(
      this.UrlServiceV1 + 'api/V1/Usuario',
      funcionario,
      this.headerOptions
    );
  }

  createEndereco(endereco: DtoEndereco): number | Promise<number> {
    return new Promise((resolve) => {
      this.http
        .post<number>(
          this.UrlServiceV1 + 'api/V1/Endereco',
          endereco,
          this.headerOptions
        )
        .subscribe((id) => resolve(id));
    });
  }

  createUsuario(usuario: DtoUsuario): number | Promise<number> {
    return new Promise((resolve) => {
      this.http
        .post<number>(
          this.UrlServiceV1 + 'api/V1/Usuario',
          usuario,
          this.headerOptions
        )
        .subscribe((id) => resolve(id));
    });
  }
  createEmpregoAnterior(
    emprego: DtoEmpresa
  ): number | PromiseLike<number> {
    return new Promise((resolve) => {
      this.http
        .post<number>(
          this.UrlServiceV1 + 'api/V1/EmpregoAnterior',
          emprego,
          this.headerOptions
        )
        .subscribe((id) => resolve(id));
    });
  }

  createContato(contato: DtoContato): number | PromiseLike<number> {
    return new Promise((resolve) => {
      this.http
        .post<number>(
          this.UrlServiceV1 + 'api/V1/Contato',
          contato,
          this.headerOptions
        )
        .subscribe((id) => resolve(id));
    });
  }
  createCargo(cargo: DtoCargo): number | PromiseLike<number> {
    return new Promise((resolve) => {
      this.http
        .post<number>(
          this.UrlServiceV1 + 'api/V1/Cargo',
          cargo,
          this.headerOptions
        )
        .subscribe((id) => resolve(id));
    });
  }
  createInfoUsuario(info_usuario: DtoInfoUsuario) {
    return new Promise((resolve) => {
      this.http
        .post<number>(
          this.UrlServiceV1 + 'api/V1/InfoUsuario',
          info_usuario,
          this.headerOptions
        )
        .subscribe((id) => resolve(id));
    });
  }
}