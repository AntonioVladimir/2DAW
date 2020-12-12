function Grupos() {
    let nuevoArray = prompt("Nombres: ").split(",");

    let grupos = document.getElementById("grupos").value;
    let personasGrupo = document.getElementById("personasDelGrupo").value;
    

    /*Transformamos lo de arriba y indexamos el array con join(), con ello evitamos la coma basura. */
    let innerText = `
        <br><h4 class="todos-nombres">TODOS LOS NOMBRES</h4><br>
            ${nuevoArray.join(', ')}
        <br><br>
    `;

    nuevoArray = Mezclador(nuevoArray);
    
    let gruposFinales = new Array();

    for (let i = 0; i < grupos; i++) {
        // Asignamos grupos aletorizados
        let arrayGrupos = "";
        for (j = 0; j < personasGrupo; j++) {
            arrayGrupos += nuevoArray[0] + ",";
            nuevoArray.shift(); //Removemos el primer elemento del array  
        }

        arrayGrupos = arrayGrupos.substring(0, arrayGrupos.length - 1);
        gruposFinales[i] = arrayGrupos;
    }
    //let innerText2 = "";
    innerText2 = "<br><br>";
    innerText += "<h5 class='todos-nombres'> GRUPOS </h5><table><tr  >\n";
    for (let i = 0; i < grupos; i++) {
        // print grupos
        let j = i + 1;
        let arrayGrupos = gruposFinales[i].split(",");
        innerText += "<td class='tablas'>Grupo " + j + "<br>"+"<br>";
        for (let k = 0; k < arrayGrupos.length; k++) {
            innerText += arrayGrupos[k] + "<br>";
        }

        innerText += "</td>\n";
    }
    innerText += "</tr></table>\n";

    document.getElementById("gruposFinales").innerHTML = innerText;


}

function Mezclador(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function Escluidos(){}
