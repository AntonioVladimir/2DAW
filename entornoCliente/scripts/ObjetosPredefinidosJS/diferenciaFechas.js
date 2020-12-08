function diferenciaFechas(fecha1,fecha2){
    var fechaInicio = new Date(fecha1).getTime();
    var fechaFin    = new Date(fecha2).getTime();

    console.log((fechaFin-fechaInicio) / (86400000));
}

diferenciaFechas("2016-07-12","2016-08-01");
