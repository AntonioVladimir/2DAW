var numAlto = prompt("Introduce alto: ");
var numAncho = prompt("Introduce ancho: ");
var numLargo = prompt("Introduce largo: ");

const cubo = {
  alto: numAlto,
  ancho: numAncho,
  largo: numLargo
};

function operacion(cubo){
  var result = (cubo.alto * cubo.ancho * cubo.largo);
  document.write(result);
}

operacion(cubo);