function numerosAleatoriosEnRango(min, max) {
    var listaNumeros = [];
    var unNumero;
  
    for (i = 0; i <= 99; i++) {
      var aleatorios = Math.round(Math.random() * (max - min) + min);
      if (unNumero == aleatorios) {
        var aleatorios = Math.round(Math.random() * (max - min) + min);
        unNumero = aleatorios;
        listaNumeros[i] = aleatorios;
      } else {
        unNumero = aleatorios;
        listaNumeros[i] = aleatorios;
      }
    }
  
    return listaNumeros;
  }
document.write("<br>"+ numerosAleatoriosEnRango(1,1000));