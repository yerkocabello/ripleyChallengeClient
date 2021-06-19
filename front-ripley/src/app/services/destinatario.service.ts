import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Destinatario} from "../model/destinatario";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  token:String = environment.token;
  headers: HttpHeaders;
  baseUrl:String = environment.baseUrl;
  /*
  local config
  baseUrl: String = '/api';
*/

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

  }

  createDestinatario(destinatario: Destinatario): Observable<any>{
    return this.http.post(this.baseUrl + '/destinatario/add-destinatario', destinatario, { headers: this.headers });
  }

  listDestinatarios(): Observable<any>{
    return this.http.get(this.baseUrl + '/destinatario/all-destinatarios', { headers: this.headers })
  }
}
