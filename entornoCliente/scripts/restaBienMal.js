var numBien = prompt("Introduce las bien: ");
var numMal = prompt("Introduce las mal: ");

const diferencia = {
  bien: numBien,
  mal: numMal
};

function operacion(diferencia){
  var result = (diferencia.bien - diferencia.mal)
  document.write(result);
}

operacion(diferencia);