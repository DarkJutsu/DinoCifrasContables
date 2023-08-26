export class ActivosClass {
  nombre = "";
  descripcion = "";
  modelo = "";
  tipo = "";
  costo = 0.0;
  vidaUtil = 0;

  constructor(nombre, descripcion, modelo, tipo, costo, vidaUtil) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.modelo = modelo;
    this.tipo = tipo;
    this.costo = costo;
    this.vidaUtil = vidaUtil;
  }
}
