import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Transferencia} from "../model/transferencia";


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  apiUrl: String;

  constructor(
    private http: HttpClient
  ) {

    this.apiUrl = 'localhost:3000/transferencia';
  }

  getTransferencias(): Observable<any> {
     return this.http.get<Transferencia[]>(this.apiUrl + '/get-all');
  }

  createTransferencia(transferencia: Transferencia): Observable<any>{
    return this.http.post<any>(this.apiUrl + '/create', transferencia);
  }
}
