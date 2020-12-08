function guardar() {

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;
    const fila = "<tr class='tr-tabla'><td class='td-tabla'>" + nombre + "</td><td class='td-tabla'>" + apellido + "</td><td class='td-tabla'>" + edad + "</td></tr>";

    const btn = document.createElement("tr");

    btn.innerHTML = fila;
    document.getElementById("tabla").appendChild(btn)
}