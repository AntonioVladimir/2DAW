function extraerNombreFichero(ruta){
    return ruta.replace(/^.*[\\\/]/, "");
}

document.write(extraerNombreFichero("C:/Projects/pil_tests/ascii/edabit.txt"));