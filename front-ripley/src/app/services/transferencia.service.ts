import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Transferencia} from "../model/transferencia";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {
  token:String = environment.baseUrl;
  headers: HttpHeaders;
  baseUrl:String = environment.baseUrl;

  /*
  local config
  baseUrl: String = '/api';
*/

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  getTransferencias(): Observable<any> {
     return this.http.get<Transferencia[]>(this.baseUrl + '/transferencia/get-all', { headers: this.headers });
  }

  createTransferencia(transferencia: Transferencia): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/transferencia/create', transferencia, { headers: this.headers });
  }
}
