import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseResponse } from '../Models/BaseResponse';
import { Insumo } from '../Models/Insumo';


@Injectable()
export class InsumoService {
constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://localhost:5001/";

    headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    public obterInsumos() : Observable< BaseResponse<Insumo[]>> {
      return this.http.get<BaseResponse<Insumo[]>>(this.UrlServiceV1 + "api/V1/Insumo");
    }

    public inserirInsumos(args: any) : Observable<any> {
      return this.http.post<any>(this.UrlServiceV1 + "api/V1/Insumo", args, this.headerOptions);
    }
}
