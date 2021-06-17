export class Destinatario{
  constructor(
    private rut: String,
    private nombre: String,
    private correo: String,
    private telefono: Number,
    private banco: {
      id: String,
      descripcion: String
    },
    private numerCuenta: String,
    private cuenta: {
      id: Number,
      descripcion: String
    }
  ){

  }
}
