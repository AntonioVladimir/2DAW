let canvasContext = null;
let posicionIconoX = 0;
let posicionIconoY = 0;
let movimientoEnX = 1;
let movimientoEnY = 1;
let tamannoIconoX = 100;
let tamannoIconoY = 100;
let tamannoCuadradoX = 800;
let tamannoCuadradoY = 720;
let animacionImagen = null;
let velocidad = 10;

function aumentoVelocidad() {
    velocidad = velocidad - 0.5;
    return velocidad;
}

function pintar() {
    const canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 100, 200);
    animacionImagen = new Image(tamannoIconoX, tamannoIconoY);
    animacionImagen.onload = function () {
        setInterval('animacionDeImagen()', velocidad);
    }
    animacionImagen.src = 'img/logo.png';
}

function animacionDeImagen() {
    canvasContext.clearRect(0, 0, tamannoCuadradoX, tamannoCuadradoY);

    if (posicionIconoX < 0 || posicionIconoX > tamannoCuadradoX - tamannoIconoX) {
        movimientoEnX = -movimientoEnX;
    } if (posicionIconoY < 0 || posicionIconoY > tamannoCuadradoY - tamannoIconoY) {
        movimientoEnY = -movimientoEnY;
    }
    posicionIconoX += movimientoEnX;
    posicionIconoY += movimientoEnY;

    canvasContext.drawImage(animacionImagen, posicionIconoX, posicionIconoY);
}

