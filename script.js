"use strict"

document.getElementById("com1").style.display = "none";
document.getElementById("com2").style.display = "none";
document.getElementById("com3").style.display = "none";
document.getElementById("com4").style.display = "none";
document.getElementById("com5").style.display = "none";
document.getElementById("com6").style.display = "none";
document.getElementById("com7").style.display = "none";
document.getElementById("com8").style.display = "none";
document.getElementById("com9").style.display = "none";
document.getElementById("com10").style.display = "none";
document.getElementById("finalbutton").style.display = "none";

function deshabilitar(clase_casilleros) {                       //DESHABILITA LAS OPCIONES UNA VEZ CONTESTADAS
var opciones = document.getElementsByClassName(clase_casilleros);
  for (var i=0; i<opciones.length; i++) {
    opciones[i].disabled = true;
  }
}
function incorrecto(rta, com) {
  document.getElementById(rta).innerHTML = "INCORRECTO...";     //MENSAJE INCORRECTO, COLOR ROJO
  document.getElementById(rta).style.display = "inline";
  document.getElementById(rta).style.background = "red";
  document.getElementById(com).style.display = "block";
}
function correcto(rta, com) {
  document.getElementById(rta).innerHTML = "CORRECTO!";         //MENSAJE CORRECTO, COLOR LIMA
  document.getElementById(rta).style.display = "inline";
  document.getElementById(rta).style.background = "lime";
  document.getElementById(com).style.display = "block";
}
function contar(){                                              //SUMA O RESTA PUNTAJE PREGUNTA 6
  var valor=0;                                                  //SI TILDA UN CHECK MAL, SE RESTA VALOR
  var check = document.getElementsByClassName("seis");          //SI TILDA UN CHECK BIEN, SE SUMA VALOR
  for (var i = 0; i <check.length; i ++){
    if (check[i].checked){
      if (check[i].value == 1){
        valor ++;
      }
      else {
        valor --;
      }
    }
  }

  return valor;
}
function igualdad(id, palabra){                                 //VERIFICA IGUALDADES DE TEXTO
  if ((document.getElementById(id).value).toUpperCase() == palabra){
    return 0;
  }
  else {
    return -1;
  }
}
var final = 0;
function comentario1(){
  final++;
  return "Dura aproximadamente 2 meses, y como para las perras no disponemos de un test de embarazo,\
          tendrás que esperar hasta los 30-35 días para notar su barriguita\
          y que empiece la secreción en sus mamas.";
}
function comentario2(){
  final++;
  return "Los cachorros nacen ciegos, también sordos, y es a partir del \
          día 12 aproximadamente cuando empiezan a abrir los ojos.";
}
function comentario3(){
  final++;
  return "En general, todos los perros sacan la lengua cuando están cansados o han hecho mucho \
          ejercicio. El motivo es que su piel no transpira como la nuestra ya que ellos no tienen \
          prácticamente glándulas sudoríparas. Por ese motivo, utilizan la lengua como una especie \
          de climatizador que les permite regular y refrigerar su temperatura corporal.";
}
function comentario4(){
  final++;
  return "De los cinco sentidos de los perros, su olfato es, sin duda, el más desarrollado. \
          De hecho, se dice que “ven” a través de él. Se calcula que estos animales tienen entre \
          200 y 300 millones de receptores olfativos, una cifra impresionante si la comparamos \
          con los 5 millones que tenemos las personas.";
}
function comentario5(){
  final++;
  return "Un estudio realizado por la Universidad de California confirmó que los perros sí ven \
          colores, pero en muchos menos cantidades que nosotros. Ven el mundo en, básicamente, \
          amarillo, azul y gris. Otros colores que nosotros distinguimos perfectamente, como el \
          verde o el naranja, ellos los ven amarillento, y también confunden el violeta como azul";
}
function comentario6(){
  final++;
  return "Los cachorros nacen ciegos y sordos, con sus ojos y oídos sellados y sin dientes. Durante las primeras \
          dos semanas de vida, los cachorros recién nacidos sienten el mundo totalmente a través del \
          tacto y el olfato, y es durante la tercera semana en la que comienzan a crecerle sus dientes de leche"
}
function comentario7(){
  final++;
  return "El pelaje del dogo argentino es corto, liso y suave al tacto, pero su densidad varía según el clima. \
          En climas cálidos, el pelo es ralo y puede dejar translucir la piel. En climas fríos es grueso y denso, \
          pudiendo incluso presentar subpelo. Debe ser de color íntegramente BLANCO, pero se admite una mancha negra \
          o de color oscuro alrededor del ojo, siempre y cuando no supere el 10% de la superficie de la cabeza."
}
function comentario8(){
  final++;
  return "Los TERRIER constituyen un grupo de razas caninas que comparten un origen común, ya sea muy \
          antiguo o más reciente. Proceden en su mayoría de Gran Bretaña y su nombre proviene del latín \
          “terra”, que significa tierra. En sus inicios eran perros empleados para la caza de animales \
          bajo tierra, de ahí su denominación."
}
function comentario9(){
  final++;
  return "DACHSHUND: Esta raza se desarrolló originalmente en Alemania en el siglo XVII para cazar tejones. \
          Su cuerpo alargado, las piernas cortas y las garras afiladas los convirtieron en magníficos \
          excavadores y cazadores subterráneos."
}
function comentario10(){
  final++;
  return "Las variables correctas son PASTOR ALEMÁN - GALGO ESPAÑOL - AKITA JAPONÉS - SETTER IRLANDÉS - HUSKY SIBERIANO."
}

var contador = 0;
var final = 0;

//PREGUNTA 1
document.getElementById("a1").onclick = function(){
  deshabilitar("uno");
  incorrecto ("rta1", "com1");
  document.getElementById("com1").innerHTML = comentario1();
}
document.getElementById("a2").onclick =  function(){
  deshabilitar("uno");
  incorrecto("rta1", "com1");
  document.getElementById("com1").innerHTML = comentario1();
}
document.getElementById("a3").onclick =  function(){
  deshabilitar("uno");
  correcto("rta1", "com1");
  document.getElementById("com1").innerHTML = comentario1();
  contador++;
}
//PREGUNTA 2
document.getElementById("b1").onclick =  function(){
  deshabilitar("dos");
  incorrecto("rta2", "com2");
  document.getElementById("com2").innerHTML = comentario2();
}
document.getElementById("b2").onclick =  function(){
  deshabilitar("dos");
  correcto("rta2", "com2");
  document.getElementById("com2").innerHTML = comentario2();
  contador++;
}
document.getElementById("b3").onclick =  function(){
  deshabilitar("dos");
  incorrecto("rta2", "com2");
  document.getElementById("com2").innerHTML = comentario2();
}
//PREGUNTA 3
document.getElementById("c1").onclick =  function(){
  deshabilitar("tres");
  incorrecto("rta3", "com3");
  document.getElementById("com3").innerHTML = comentario3();
}
document.getElementById("c2").onclick =  function(){
  deshabilitar("tres");
  incorrecto("rta3", "com3");
  document.getElementById("com3").innerHTML = comentario3();
}
document.getElementById("c3").onclick =  function(){
  deshabilitar("tres");
  correcto("rta3", "com3");
  document.getElementById("com3").innerHTML = comentario3();
  contador++;
}
//PREGUNTA 4
document.getElementById("d1").onclick =  function(){
  deshabilitar("cuatro");
  incorrecto("rta4", "com4");
  document.getElementById("com4").innerHTML = comentario4();
}
document.getElementById("d2").onclick =  function(){
  deshabilitar("cuatro");
  incorrecto("rta4", "com4");
  document.getElementById("com4").innerHTML = comentario4();
}
document.getElementById("d3").onclick =  function(){
  deshabilitar("cuatro");
  correcto("rta4", "com4");
  document.getElementById("com4").innerHTML = comentario4();
  contador++;
}
//PREGUNTA 5
document.getElementById("e1").onclick =  function(){
  deshabilitar("cinco");
  incorrecto("rta5", "com5");
  document.getElementById("com5").innerHTML = comentario5();
}
document.getElementById("e2").onclick =  function(){
  deshabilitar("cinco");
  correcto("rta5", "com5");
  document.getElementById("com5").innerHTML = comentario5();
  contador++;
}
document.getElementById("e3").onclick =  function(){
  deshabilitar("cinco");
  incorrecto("rta5", "com5");
  document.getElementById("com5").innerHTML = comentario5();
}
//PREGUNTA 6
document.getElementById("button6").onclick =  function(){
  deshabilitar("seis");
  if (contar() == 3){
    correcto("rta6", "com6");
    document.getElementById("com6").innerHTML = comentario6();
    contador++;
  } else {
    incorrecto("rta6", "com6");
    document.getElementById("com6").innerHTML = comentario6();
  }
}
//PREGUNTA 7
document.getElementById("button7").onclick =  function(){
  deshabilitar("siete");
  if (igualdad("g1", "BLANCO") == 0){
    correcto("rta7", "com7");
    document.getElementById("com7").innerHTML = comentario7();
    contador++;
  } else {
    incorrecto("rta7", "com7");
    document.getElementById("com7").innerHTML = comentario7();
  }
}
//PREGUNTA 8
document.getElementById("button8").onclick =  function(){
  deshabilitar("ocho");
  if (igualdad("h1", "TERRIER") == 0){
    correcto("rta8", "com8");
    document.getElementById("com8").innerHTML = comentario8();
    contador++;
  } else {
    incorrecto("rta8", "com8");
    document.getElementById("com8").innerHTML = comentario8();
  }
}
//PREGUNTA 9
document.getElementById("button9").onclick =  function(){
  deshabilitar("nueve");
  if (document.getElementById("i1").value == 1){
    correcto("rta9", "com9");
    document.getElementById("com9").innerHTML = comentario9();
    contador++;
  } else {
    incorrecto("rta9", "com9");
    document.getElementById("com9").innerHTML = comentario9();
  }
}
//PREGUNTA 10
document.getElementById("button10").onclick =  function(){
  deshabilitar("diez");
  if (document.getElementById("j1").value == document.getElementById("j2").value){
    correcto("rta10", "com10");
    document.getElementById("com10").innerHTML = comentario10();
    contador++;
  } else {
    incorrecto("rta10", "com10");
    document.getElementById("com10").innerHTML = comentario10();
  }
}

//BOTON DE PUNTAJE
document.getElementById("FINAL").onclick =  function(){
  alert("Usted contestó " + contador + " respuestas correctas sobre un total de 10");
}

if (final == 10){
  document.getElementById("finalbutton").display = "block";
}
