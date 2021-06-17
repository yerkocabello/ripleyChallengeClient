import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Destinatario} from "../model/destinatario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  apiUrl: String;
  constructor(private http: HttpClient) {
    this.apiUrl = 'localhost:3000/destinatario';
  }

  createDestinatario(destinatario: Destinatario): Observable<any>{
    return this.http.post(this.apiUrl + '/add-destinatario', destinatario);
  }
}
