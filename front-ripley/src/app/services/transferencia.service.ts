import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transferencia} from "../model/transferencia";


@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {
  token:String = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611';
  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  getTransferencias(): Observable<any> {
     return this.http.get<Transferencia[]>('/api/transferencia/get-all', { headers: this.headers });
  }

  createTransferencia(transferencia: Transferencia): Observable<any>{
    return this.http.post<any>('/api/transferencia/create', transferencia, { headers: this.headers });
  }
}
