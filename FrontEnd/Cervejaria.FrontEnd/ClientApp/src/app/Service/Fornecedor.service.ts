import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { ClienteFornecedor } from '../Models/ClienteFornecedor';
import { DtoClienteFornecedor } from '../DTOs/DtoClienteFornecedor';

@Injectable( )
export class FornecedorService {
  constructor(private http: HttpClient) { }
  
  protected UrlServiceV1: string = "https://cervejaria-api.herokuapp.com/";

    headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    public obterFornecedor() : Observable< BaseResponse<ClienteFornecedor[]>> {
      return this.http.get<BaseResponse<ClienteFornecedor[]>>(this.UrlServiceV1 + "api/V1/ClienteFornecedor");
    }

    public inserirFornecedor (fornecedor: DtoClienteFornecedor) : Observable<ClienteFornecedor> {
      return this.http.post<any>(this.UrlServiceV1 + "api/V1/ClienteFornecedor", fornecedor, this.headerOptions);
    }
}
