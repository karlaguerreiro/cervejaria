import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { ClienteFornecedor } from '../Models/ClienteFornecedor';

@Injectable()
export class ClienteService {
constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://cervejaria-api.herokuapp.com/";

    public obterClientes() : Observable<BaseResponse<ClienteFornecedor[]>> {
      return this.http.get<BaseResponse<ClienteFornecedor[]>>(this.UrlServiceV1 + "api/V1/ClienteFornecedor");
    }

    public inserirClientes(args: any) : any {
      return this.http.post<any>(this.UrlServiceV1 + "api/V1/ClienteFornecedor", args);
    }
}
