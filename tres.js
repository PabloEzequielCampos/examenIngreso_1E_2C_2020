/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/

function mostrar() {

	let continuarProceso;
	let sexoTitular;
	let lugar;
	let temporada;
	let totalPersonas = 0;
	let lugarBariloche = 0;
	let lugarCataratas = 0;
	let lugarSalta = 0;
	let viajesInvierno = 0;
	let sexoMaxPersonas;
	let maxPersonas = 0;
	let lugarMasElegido;
	let maxPersonasViajesInvierno = 0;
	let promedioPersonasInvierno = 0;

	do {
		
		do {
			sexoTitular = prompt("Ingrese el sexo del titular (hombre, mujer):");
		} while (sexoTitular != 'hombre' && sexoTitular != 'mujer');

		
		do {
			lugar = prompt("Ingrese el lugar de estadía (bariloche, cataratas, salta):");
		} while (lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta');

		
		do {
			temporada = prompt("Ingrese la temporada del viaje (otoño, invierno, verano, primavera):");
		} while (temporada != 'otoño' && temporada != 'invierno' && temporada != 'verano' && temporada != 'primavera');

		totalPersonas = parseInt(prompt("Ingrese cantidad de personas que viaja (Número):"));

		
		if (lugar == 'bariloche') {
			lugarBariloche++;
		}

		if (lugar == 'cataratas') {
			lugarCataratas++;
		}

		if (lugar == 'salta') {
			lugarSalta++;
		}

		if (totalPersonas > maxPersonas) {
			sexoMaxPersonas = sexoTitular;
			maxPersonas = totalPersonas;
		}

		if (temporada == 'invierno') {
			maxPersonasViajesInvierno = maxPersonasViajesInvierno + totalPersonas;
			viajesInvierno++;
		}

	
		continuarProceso = prompt("Quieres añadir otra estadía? s/n")
	} while (continuarProceso == 's')


	if (lugarBariloche > lugarCataratas && lugarBariloche > lugarSalta) {
		lugarMasElegido = 'bariloche';
	} else if (lugarCataratas > lugarSalta) {
		lugarMasElegido = 'cataratas';
	} else {
		lugarMasElegido = 'salta';
	}

	
	if (viajesInvierno > 0) {
		promedioPersonasInvierno = maxPersonasViajesInvierno / viajesInvierno;
	}

	document.write("El lugar más elegido: " + lugarMasElegido + '<br>');
	document.write("El sexo de titular que lleva más pasajeros: " + sexoMaxPersonas + '<br>');
	document.write("El promedio de personas por viaje,  que viajan en invierno: " + parseInt(promedioPersonasInvierno) + '<br>');
}