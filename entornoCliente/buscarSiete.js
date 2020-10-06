function sieteEstas() {
    const arrayNumeros = [];
    for (i = 0; i < 5; i++) {
      var numeros = prompt("añade numeros");
      arrayNumeros[i] = numeros;
    }
    const found = arrayNumeros.find((element) => element == "7");
    if (found) {
      document.write("<br>" + "Boom!");
    } else {
      document.write("<br>" + "No esta el 7.");
    }
  }
  
sieteEstas();