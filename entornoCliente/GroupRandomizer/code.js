let nuevoArray = new Array();


function Grupos() {
    let nuevoArray = prompt("Nombres: ").split(",");

    let grupos = document.getElementById("grupos").value;
    let personasGrupo = document.getElementById("personasDelGrupo").value;
    
    let innerText = "<br><h4 class='todos-nombres'> TODOS LOS NOMBRES </h4><br>";
    for (let i = 0; i < nuevoArray.length; i++) {
        innerText += nuevoArray[i] + " : ";
    }
    innerText += "<br>" + "<br>" + "\n";


    nuevoArray = Mezclador(nuevoArray);

    let gruposFinales = new Array();

    for (let i = 0; i < grupos; i++) {
        // assign shuffled elements
        let grpArr = "";
        for (j = 0; j < personasGrupo; j++) {
            grpArr += nuevoArray[0] + ",";
            nuevoArray.shift(); // removes first element from array    
        }

        grpArr = grpArr.substring(0, grpArr.length - 1);
        gruposFinales[i] = grpArr;
    }
    let innerText2 = "";
    innerText2 = "<br><br>";
    innerText += "<h5 class='todos-nombres'> GRUPOS </h5><table><tr  >\n";
    for (let i = 0; i < grupos; i++) {
        // print grupos
        let j = i + 1;
        let grpArr = gruposFinales[i].split(",");
        innerText += "<td class='tablas'>Grupo " + j + "<br>"+"<br>";
        for (let k = 0; k < grpArr.length; k++) {
            innerText += grpArr[k] + "<br>";
        }

        innerText += "</td>\n";
    }
    innerText += "</tr></table>\n";

    document.getElementById("gruposFinales").innerHTML = innerText;


}

/**
* Randomize array element order in-place.
* Using Durstenfeld shuffle algorithm.
*/
function Mezclador(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
