function textoReconfigurado(string){
    var textoSeparado = string.replace(/[^aeiou]+|[aeiou]+/gi, cadaElemento => cadaElemento + " ");
    var arrayTexto = textoSeparado.split(" ");
    var mapeoTexto = arrayTexto.map(x => x.length > 1 ? [...x].reverse() : x);
    var eliminarComas = mapeoTexto.toString().replace(/,/g, "");
    var espacioMayus = eliminarComas.replace(/([A-Z])/g, ' $1').trim(); 
    
    document.write(espacioMayus);
    
}

textoReconfigurado("hCemicarBlohtesr");