function detectarN(texto){
    return texto.toLowerCase().slice(-1) == "n" ? true: false;
}
console.log(detectarN("AdaN"));