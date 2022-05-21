import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { Receita } from '../Models/Receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  constructor(private http: HttpClient) { }
  protected UrlServiceV1: string = "https://cervejaria-api.herokuapp.com/";

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public obterReceitas() : Observable< BaseResponse<Receita[]>> {
    return this.http.get<BaseResponse<Receita[]>>(this.UrlServiceV1 + "api/V1/Receita");
  }

  public inserirReceitas(args: any) : Observable<any> {
    return this.http.post<any>(this.UrlServiceV1 + "api/V1/Receita", args, this.headerOptions);
  }


}


