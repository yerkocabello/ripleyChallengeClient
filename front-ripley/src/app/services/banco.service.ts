import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cuenta} from "../model/cuenta";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  token:String = environment.token;
  baseUrl:String = environment.baseUrl;
  /*
  local config
  baseUrl: String = '/api';
*/

  constructor(private http: HttpClient) { }

  getBancos(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get<Cuenta[]>(this.baseUrl + '/banco/get-all', { headers: headers });
  }
}
