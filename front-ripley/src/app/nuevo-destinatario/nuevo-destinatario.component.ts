import { Component, OnInit } from '@angular/core';
import {CuentaService} from "../services/cuenta.service";
import {Cuenta} from "../model/cuenta";
import {Router} from "@angular/router";
import {Destinatario} from "../model/destinatario";
import {DestinatarioService} from "../services/destinatario.service";

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.scss']
})
export class NuevoDestinatarioComponent implements OnInit {
  cuentas: Cuenta[];

  constructor(
    private router: Router,
    private cuentaService: CuentaService,
    private destinatarioService: DestinatarioService) { }

  ngOnInit() {
    this.cuentaService.getCuentas()
      .subscribe(data =>{
        console.log(data);
        this.cuentas = data;
      })
  }

  craarDestinatario(destinatario: Destinatario){
    this.destinatarioService.createDestinatario(destinatario)
      .subscribe(data => {
        this.router.navigate([''])
      })

  }

}
