import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cuenta} from "../model/cuenta";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  apiUrl: String;

  constructor(private http: HttpClient) {
    this.apiUrl = 'localhost:3000/cuenta';
  }

  getCuentas(): Observable<any> {
    return this.http.get<Cuenta[]>(this.apiUrl + '/get-all');
  }
}
