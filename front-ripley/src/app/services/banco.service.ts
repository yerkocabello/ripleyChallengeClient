import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cuenta} from "../model/cuenta";

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  token:String = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611';

  constructor(private http: HttpClient) { }

  getBancos(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get<Cuenta[]>('/api/banco/get-all', { headers: headers });
  }
}
