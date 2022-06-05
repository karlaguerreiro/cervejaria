import { DtoReceita } from '../DTOs/DtoReceita';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';

@Injectable()
export class ReceitaService {
  constructor(private http: HttpClient) {}
  protected UrlServiceV1: string = 'https://cervejaria-api.herokuapp.com/';

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  public obterReceitas(): Observable<BaseResponse<DtoReceita[]>> {
    return this.http.get<BaseResponse<DtoReceita[]>>(
      this.UrlServiceV1 + 'api/V1/Receita'
    );
  }

  public inserirReceita(receita: DtoReceita ): Observable<BaseResponse<DtoReceita>> {
    return this.http.post<BaseResponse<any>>(
      this.UrlServiceV1 + 'api/V1/Receita',
      receita,
      this.headerOptions
    );
  }
  public alterarReceita(receita: DtoReceita ): Observable<BaseResponse<DtoReceita>> {
    return this.http.put<BaseResponse<any>>(
      this.UrlServiceV1 + 'api/V1/Receita',
      receita,
      this.headerOptions
    );
  }
  public deletarReceita(id: number ): Observable<BaseResponse<DtoReceita>> {
    return this.http.delete<BaseResponse<any>>(
      this.UrlServiceV1 + 'api/V1/Receita/' + id,
      this.headerOptions
    );
  }
}
