const actual = new Date();
function Calendario(year, month) {

	let dia = 0;
	let resultado = "<tr>";
	let diaActual = 0;
	let finde = 0;
	const now = new Date(year, month - 1, 1);
	const last = new Date(year, month, 0);
	const primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
	const ultimoDiaMes = last.getDate();

	let ultimaCelda = primerDiaSemana + ultimoDiaMes;

	// HAREMOS UN BUCLE DE HASTA 42 YA QUE 7 COLUMNAS POR 6 FILAS === 42.
	for (let i = 1; i <= 42; i++) {
		if (i == primerDiaSemana) {
			// HACEMOS QUE EMPIECE POR DÍA 1
			dia = 1;
		}
		if (i < primerDiaSemana || i >= ultimaCelda) {
			//ESTABLECEMOS LAS FILAS VACIAS
			resultado += "<td>&nbsp;</td>";
		} else {
			//MOSTRAREMOS LOS DIAS
			if (dia == actual.getDate() && month == actual.getMonth() + 1 && year == actual.getFullYear()) {
				resultado += "<td class='hoy'>" + dia + "</td>";
			}
			else {
				resultado += "<td class='dias'>" + dia + "</td>";
			}
			dia++;
		}
		if (i % 7 == 0) {
			if (dia > ultimoDiaMes)
				break;
			resultado += "</tr><tr>\n";
		}
	}
	resultado += "</tr>";

	var meses = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	//CALCULAREMOS EL MES Y AÑO SIGUIENTE
	mesSiguiente = month + 1;
	annoSiguiente = year;
	if (month + 1 > 12) {
		mesSiguiente = 1;
		annoSiguiente = year + 1;
	}

	// CALCULAREMOS EL MES Y AÑO ANTERIOR
	mesAnterior = month - 1;
	annoAnterior = year;
	if (month - 1 < 1) {
		mesAnterior = 12;
		annoAnterior = year - 1;
	}
	//RECOGEMOS EL ID
	document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = "<div>" + year + "</div><div><a onclick='Calendario(" + annoAnterior + "," + mesAnterior + ")'>&lt;</a> " + meses[month - 1] + "  <a onclick='Calendario(" + annoSiguiente + "," + mesSiguiente + ")'>&gt;</a></div>";
	document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
}

Calendario(actual.getFullYear(), actual.getMonth() + 1);