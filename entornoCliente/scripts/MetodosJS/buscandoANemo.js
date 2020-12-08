function buscandoNemo() {
    let cadena = prompt(
      'Escribe una frase con la palabra "nemo"' + ""
    ).toLowerCase();
  
    let nemo = "nemo";
  
    let hubicacion = cadena.indexOf(nemo);
    document.write("<br>" + cadena);
    if (hubicacion !== -1) {
      document.write(
        "<br>" + "He encontrado a nemo en la posicion: " + hubicacion);
    } else {
      document.write("<br>" + "No está Nemo!:(");
    }
  }
buscandoNemo();