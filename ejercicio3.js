class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    mostrarPropiedades() {
      console.log(`El rectángulo tiene un alto de ${this.alto} y un ancho de ${this.ancho}.`);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  
  const miRectangulo = new Rectangulo(5, 10);
  miRectangulo.mostrarPropiedades(); 
  console.log(`El perímetro del rectángulo es ${miRectangulo.calcularPerimetro()} y su área es ${miRectangulo.calcularArea()}.`); 
  
  miRectangulo.modificarAlto(8);
  miRectangulo.modificarAncho(12);
  miRectangulo.mostrarPropiedades();
  console.log(`El perímetro del rectángulo es ${miRectangulo.calcularPerimetro()} y su área es ${miRectangulo.calcularArea()}.`); 