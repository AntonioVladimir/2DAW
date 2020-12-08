function heladoDulce(helados){
    var sabores = {
        "Plain": 0,
        "Vanilla": 5,
        "ChocolateChip": 5,
        "Strawberry": 10,
        "Chocolate": 10
    }

    var recHelados = helados.map(helado => sabores[helado.sabor] + helado.edulcorante);
    var heladoMasDulce = Math.max(...recHelados);
    document.write(heladoMasDulce);

}

var helado1 = ({sabor: "Chocolate", edulcorante: 13});
var helado2 = ({sabor: "Vanilla", edulcorante: 0});


heladoDulce([helado1, helado2]);