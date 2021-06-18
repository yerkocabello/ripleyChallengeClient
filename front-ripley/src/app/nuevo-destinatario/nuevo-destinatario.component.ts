import { Component, OnInit } from '@angular/core';
import {CuentaService} from "../services/cuenta.service";
import {Cuenta} from "../model/cuenta";
import {Router} from "@angular/router";
import {Destinatario} from "../model/destinatario";
import {DestinatarioService} from "../services/destinatario.service";
import {FormControl, FormGroup} from "@angular/forms";
import {BancoService} from "../services/banco.service";
import {Banco} from "../model/banco";

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.scss']
})
export class NuevoDestinatarioComponent implements OnInit {
  cuentas: Cuenta[];
  bancos: Banco[];
  formDestinatario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    banco: new FormControl(''),
    tipoCuenta: new FormControl(''),
    numeroCuenta: new FormControl('')
  });

  constructor(
    private router: Router,
    private cuentaService: CuentaService,
    private bancoService: BancoService,
    private destinatarioService: DestinatarioService) { }

  ngOnInit() {
    this.cuentaService.getCuentas()
      .subscribe(data =>{
        this.cuentas = data.data;
      })
    this.bancoService.getBancos()
      .subscribe(data =>{
        this.bancos = data.data;
      })
  }

  craarDestinatario(){

    var destinatario= new Destinatario(
      this.formDestinatario.get('rut').value,
      this.formDestinatario.get('nombre').value,
      this.formDestinatario.get('correo').value,
      this.formDestinatario.get('telefono').value,
      this.bancos.find(banco => banco.id == this.formDestinatario.get('banco').value),
      this.formDestinatario.get('numeroCuenta').value,
      this.cuentas.find(cuenta => cuenta.id == this.formDestinatario.get('tipoCuenta').value)
      )
      console.log(destinatario);
    ;

    this.destinatarioService.createDestinatario(destinatario)
      .subscribe(data => {
        localStorage.setItem('destinatario', JSON.stringify(destinatario));
        this.router.navigate(['transferir'])
      })

  }

}
