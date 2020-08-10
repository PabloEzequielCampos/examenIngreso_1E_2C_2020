/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/
function mostrar() {
  let resp;
  let marca;
  let precio = 0;
  let acumuladorPeso = 0;
  let peso = 0;
  let tipo;
  let productoMasCaroLiquidos = 0;
  let productoMasBaratoSolidos = 0;
  let marcaMasCaraLiquido;
  let marcaMasBarataSolidos;

  do {

    do {
      marca = prompt("Ingrese marca");
    } while (!(isNaN(marca)));

    do {
      precio = parseInt(prompt("Ingrese precio"));

    } while ((isNaN(precio)));

    do {
      peso = parseInt(prompt("Ingrese peso"));
      acumuladorPeso += peso;
    } while ((isNaN(peso)));

    do {
      tipo = (prompt("Ingrese tipo : solido / liquido"));
    } while (!(tipo == "solido" || tipo == "liquido"));


    if (precio > productoMasCaroLiquidos && tipo == 'liquido') {
      marcaMasCaraLiquido = marca;
      productoMasCaroLiquidos = precio;
    }

    if (precio > productoMasBaratoSolidos && tipo == 'solido') {
      marcaMasBarataSolidos = marca;
      productoMasBaratoSolidos = precio;
    }

    resp = prompt(" Ingresa otro ?");
  } while (resp == "s");

  document.write("El peso total de la compra ess :" + acumuladorPeso + "<br>");
  document.write("El mas caro de los liquidos es de marca: " + marcaMasCaraLiquido + "<br>");
  document.write("El mas barato de los solidos es:  " + marcaMasBarataSolidos + "<br>");
}