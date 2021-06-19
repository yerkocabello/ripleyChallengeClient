import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cuenta} from "../model/cuenta";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  apiUrl: String;
  token:String = environment.token;
  baseUrl:String = environment.baseUrl;
  /*
  local config
  baseUrl: String = '/api';
*/

  constructor(private http: HttpClient) {
  }

  getCuentas(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get<Cuenta[]>(this.baseUrl + '/cuenta/get-all', { headers: headers });
  }
}
