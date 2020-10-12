const datosAlumno = {
    nombre: "Vladi",
    notas: [10,4,2]
};

function notaMasAlta(datosAlumno){
    var solucion = {
        nombre: datosAlumno.nombre,
        topNota: Math.max(...datosAlumno.notas)
    }
    console.log(solucion);
}

notaMasAlta(datosAlumno);