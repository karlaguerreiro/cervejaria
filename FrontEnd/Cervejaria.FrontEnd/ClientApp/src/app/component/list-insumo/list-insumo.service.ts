import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Insumo } from './Insumo';
import { BaseResponse } from './BaseResponse';
import { Observable } from 'rxjs';


@Injectable()
export class InsumoService {
constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://localhost:5001/";

    public obterInsumos() : Observable< BaseResponse<Insumo[]>> {
      return this.http.get<BaseResponse<Insumo[]>>(this.UrlServiceV1 + "api/V1/Insumo");
    }
}
