const cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(cantidad) {
      this.saldo += cantidad;
      console.log(`Se han ingresado ${cantidad} dolares en la cuenta. El saldo actual es de ${this.saldo} dolares.`);
    },
    extraer: function(cantidad) {
      if (cantidad > this.saldo) {
        console.log(`No se puede extraer ${cantidad} euros. El saldo actual es de ${this.saldo} dolares.`);
      } else {
        this.saldo -= cantidad;
        console.log(`Se han extraído ${cantidad} dolares de la cuenta. El saldo actual es de ${this.saldo} dolares.`);
      }
    },
    informar: function() {
      console.log(`Titular: ${this.titular}. Saldo: ${this.saldo} dolares.`);
    }
  };
  
  console.log('Descripción de la cuenta:');
  cuenta.informar();
  
  cuenta.ingresar(500);
  cuenta.extraer(200);
  
  console.log('Descripción de la cuenta actualizada:');
  cuenta.informar();
  
  
  
  
  