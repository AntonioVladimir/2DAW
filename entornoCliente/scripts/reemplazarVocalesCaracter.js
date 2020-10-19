function reemplazarVocalesCaracter(texto, caracter){
    return texto.replace(/[aeiou]/gi, caracter);
}

document.write(reemplazarVocalesCaracter("the aardvark", "#"));