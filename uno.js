/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/


function mostrar() {

	let nombre;
	let peso;
	let pesomax = 0;
	let sexo;
	let edad;
	let cantidadF = 0;
	let sumaEdad = 0;
	let promedio;
	let contadorEdad = 0;

	for (let i = 0; i < 5; i++) {  ///// volver a 5.

		do {
			nombre = prompt("Ingrese Nombre");

		} while (!(isNaN(nombre)));

		do {
			peso = parseInt(prompt("Ingrese Peso"));

		} while ((isNaN(peso)));

		do {
			sexo = prompt("Ingrese sexo:  f/m");

		} while (sexo != "f" && sexo != "m");

		do {
			edad = parseInt(prompt("Ingrese Edad"));

		} while (isNaN(edad));

		if (sexo == "f") {
			cantidadF++;
		}

		if (edad > 0) {
			contadorEdad++
			sumaEdad = sumaEdad + edad;
			promedio = sumaEdad / contadorEdad;
		}
		if (peso > pesomax && sexo == "m") {
			pesomax = peso;

		}

	}//FINALIZA EL FOR

	document.write(cantidadF + " : Es la cantidad de  Mujeres" + "</br>");
	document.write(promedio + " :  Es la Edad promedio General" + "</br>");
	document.write("El hombre mas PESADO es:  " + pesomax + "</br>");

}







