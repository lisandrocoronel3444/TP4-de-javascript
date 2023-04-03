class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  mostrarPropiedades() {
    console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
  }

  calcularPerimetro() {
    return (this.alto + this.ancho) * 2;
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}