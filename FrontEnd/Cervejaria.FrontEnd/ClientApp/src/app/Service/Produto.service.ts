import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { DtoProduto } from '../DTOs/DtoProduto';@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  protected UrlServiceV1: string = "https://cervejaria-api.herokuapp.com/";

  public GetAll() : Observable<BaseResponse<DtoProduto[]>> {
    return this.http.get<BaseResponse<DtoProduto[]>>(this.UrlServiceV1 + "api/V1/Produto");
  }

  public Save(args: any) : any {
    return this.http.post<any>(this.UrlServiceV1 + "api/V1/Produto", args);
  }

  public GetByType(type: number) : any {
    return this.http.get<any>(this.UrlServiceV1 + "api/V1/Produto/type/" + type);
  }

  public Edit(args: any) : any {
    return this.http.put<any>(this.UrlServiceV1 + "api/V1/Produto", args);
  }

  public Delete(id: number) : any {
    return this.http.delete<any>(this.UrlServiceV1 + "api/V1/Produto/" + id);
  } 
}
