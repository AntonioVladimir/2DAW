function extraerDiasSemana(dia){
    var Fecha = new Date(dia).getDay();
    var diasDeLaSemana = {
        0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday',
    }
    document.write(diasDeLaSemana[Fecha]);
}

extraerDiasSemana("09/04/2016");