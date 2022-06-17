import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { Insumo } from '../Models/Insumo';
import { DtoInsumo } from '../DTOs/DtoInsumo';


@Injectable()
export class InsumoService {
constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://cervejaria-api.herokuapp.com/";

    headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    public obterInsumos() : Observable<BaseResponse<Insumo[]>> {
      return this.http.get<BaseResponse<Insumo[]>>(this.UrlServiceV1 + "api/V1/Insumo");
    }

    public obterInsumosPorIdReceita(id: number) : Observable<BaseResponse<Insumo[]>> {
      return this.http.get<BaseResponse<Insumo[]>>(this.UrlServiceV1 + "api/V1/Insumo/byReceita/" + id);
    }


    public inserirInsumo(insumo: DtoInsumo) : Observable<Insumo> {
      return this.http.post<any>(this.UrlServiceV1 + "api/V1/Insumo", insumo, this.headerOptions);
    }

    public alterarInsumo(insumo: Insumo) : Observable<Insumo> {
      return this.http.put<any>(this.UrlServiceV1 + "api/V1/Insumo", insumo, this.headerOptions);
    }
  
    public Delete(id: number) : any {
      return this.http.delete<any>(this.UrlServiceV1 + "api/V1/Insumo/" + id);
    } 
}
