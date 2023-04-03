class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
  }
  
  const producto1 = new Producto(1, 'Camiseta', 20.99);
  const producto2 = new Producto(2, 'Pantalón', 40.99);
  const producto3 = new Producto(3, 'Zapatos', 70.99);

  const productos = [producto1, producto2, producto3];
  

  productos.forEach(producto => producto.imprimeDatos());