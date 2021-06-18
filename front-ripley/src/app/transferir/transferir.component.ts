import { Component, OnInit } from '@angular/core';
import {Destinatario} from "../model/destinatario";
import {DestinatarioService} from "../services/destinatario.service";
import {Transferencia} from "../model/transferencia";
import {TransferenciaService} from "../services/transferencia.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.scss']
})
export class TransferirComponent implements OnInit {
  nombreDestinatario: String = "";
  monto: any;
  destinatario: Destinatario;
  destinatarios: Destinatario[];

  constructor(
    private destinatariosService: DestinatarioService,
    private transferenciaService: TransferenciaService,
    private router: Router){ }

  ngOnInit() {
    this.destinatariosService.listDestinatarios()
      .subscribe(data =>{
        this.destinatarios = data.data;
      })
    this.destinatario = JSON.parse(localStorage.getItem('destinatario'));
    this.nombreDestinatario = this.destinatario.nombre;
  }

  transferir(){
    if(this.monto > 0){
      this.transferenciaService.createTransferencia( new Transferencia(this.destinatario, this.monto))
        .subscribe(data => {
          this.router.navigate(['historial'])
        })
    }
  }

}
