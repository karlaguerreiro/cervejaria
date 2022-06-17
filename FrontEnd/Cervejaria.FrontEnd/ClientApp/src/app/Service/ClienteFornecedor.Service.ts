import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { ClienteFornecedor } from '../Models/ClienteFornecedor';

@Injectable()
export class ClienteFornecedorService {
constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://cervejaria-api.herokuapp.com/";

    headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
      
    public GetAll() : Observable<BaseResponse<ClienteFornecedor[]>> {
      return this.http.get<BaseResponse<ClienteFornecedor[]>>(this.UrlServiceV1 + "api/V1/ClienteFornecedor");
    }

    public Save(args: any) : any {
      return this.http.post<any>(this.UrlServiceV1 + "api/V1/ClienteFornecedor", args);
    }

    public GetByType(type: number) : any {
      return this.http.get<any>(this.UrlServiceV1 + "api/V1/ClienteFornecedor/type/" + type);
    }

    // public Edit(args :any) {
    //   return this.http.put<any>(this.UrlServiceV1 + "api/V1/ClienteFornecedor/" ,args);
    // }

    public Delete(id: number) : any {
      return this.http.delete<any>(this.UrlServiceV1 + "api/V1/ClienteFornecedor/" + id);
    }
    
    public alterarFornecedor(fornecedor: ClienteFornecedor): Observable<BaseResponse<ClienteFornecedor>>{
      return this.http.put<BaseResponse<any>>(
        this.UrlServiceV1 + 'api/V1/ClienteFornecedor/1',
        {
          ...fornecedor,
          tipo: 'Fornecedor',
          contato: {
             telefone: fornecedor.telefone,
              email: fornecedor.email
          }
        },
        this.headerOptions
      );
    }

    public alterarCliente(cliente: ClienteFornecedor): Observable<BaseResponse<ClienteFornecedor>>{
      return this.http.put<BaseResponse<any>>(
        this.UrlServiceV1 + 'api/V1/ClienteFornecedor',
        {
          ...cliente,
          tipo: 'Cliente',
          contato: {
            email : cliente.email,
            telefone : cliente.telefone
          }
        },
        this.headerOptions
      );
    }

}


