let impostoresVar = document.querySelector("#impostores");
let impostoresVarTiempo = document.querySelector(".tiempoVotacion span");
let votacionImpostoresVar = document.querySelector(".tiempoVotacion");
let boton = undefined;
let intevalo = undefined;
let segundero = 30;
let jugadores = [
    {"nombre": "Vladi","id": "rojo"},
    {"nombre": "Melen","id": "azul"},
    {"nombre": "Gabri","id": "verde"},
    {"nombre": "Lucia","id": "amarillo"},
    {"nombre": "Brian","id": "morado"},
    {"nombre": "Jesús","id": "turquesa"},
    {"nombre": "David","id": "rosa"},
    {"nombre": "Dario","id": "negro"},
    {"nombre": "Mario","id": "blanco"}
];

jugadores.forEach(function(jugador) {
    console.log("Nombre: " + jugador.nombre +" |"+ " Edad: " + jugador.id);
    let div = document.createElement("div");
    
    div.textContent = jugador.nombre;
    div.className = "impostor";
    div.id = jugador.id;
    console.log(div);
    divConDatos = div;

    document.getElementById("impostores").append(divConDatos);
});

console.log(divConDatos);

impostoresVar.addEventListener("click", votacion);

function votacion(event) {
    if (boton !== undefined) {
        boton.classList.remove("votado");
    }
    boton = event.target;

    boton.classList.add("votado");
}

function finDeVotacion() {
    clearInterval(intevalo);
    votacionImpostoresVar.innerHTML = "La votacion ha terminado!";
    impostoresVar.removeEventListener("click", votacion);
}

function cuentaAtrasAviso() {
    segundero--;
    impostoresVarTiempo.innerHTML = segundero;
    if (segundero === 10) {
        votacionImpostoresVar.style.color = "red";
        votacionImpostoresVar.style.fonSize = 40;
    }
    if (segundero === 0) {
        finDeVotacion();
    }
}

intevalo = setInterval(cuentaAtrasAviso, 1000);
