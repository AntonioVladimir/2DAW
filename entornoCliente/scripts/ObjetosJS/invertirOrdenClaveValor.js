const objetoConValores = {
    a:1,
    b:2,
    c:3,
    d:4
};
    console.log(objetoConValores);

function invertirOrden(objetoConValores){
    var solucion = Object.entries(objetoConValores).map(([key,valor]) => ({valor,key}));
    console.log(solucion);
}
    //document.write(JSON.stringify(OBJ))
invertirOrden(objetoConValores);
