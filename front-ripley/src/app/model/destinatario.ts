import {Banco} from "./banco";
import {Cuenta} from "./cuenta";

export class Destinatario{
  public rut: String;
  public nombre: String;
  public correo: String;
  public telefono: Number;
  public banco: Banco;
  public numeroCuenta: String;
  public cuenta: Cuenta
  constructor(rut, nombre, correo, telefono, banco, numeroCuenta, cuenta){
    this.rut = rut;
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
    this.banco = banco;
    this.numeroCuenta = numeroCuenta;
    this.cuenta = cuenta;

  }
}
