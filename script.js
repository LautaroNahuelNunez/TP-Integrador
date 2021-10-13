"use strict"

document.getElementById("com1").style.display = "none";
document.getElementById("com2").style.display = "none";


function deshabilitar(clase_radios) {
var radios = document.getElementsByClassName(clase_radios); //clase_radios
  for (var i=0; i<radios.length; i++) {
    radios[i].disabled = true;
  }
}
function incorrecto() {
  return "INCORRECTO...";
}
function correcto() {
  return "CORRECTO!"
}
function comentario1(){
  return "Como para las perras no disponemos de un test de embarazo,\
          tendrás que esperar hasta los 30-35 días para notar su barriguita\
          y que empiece la secreción en sus mamas.";
}
function comentario2(){
  return "Los cachorros nacen ciegos, también sordos, y es a partir del \
          día 12 aproximadamente cuando empiezan a abrir los ojos.";
}


//PREGUNTA 1
document.getElementById(11).onclick =  function(){
  deshabilitar("uno");
  document.getElementById("rta1").innerHTML = incorrecto();
  document.getElementById("rta1").style.display = "inline";
  document.getElementById("rta1").style.background = "red";
  document.getElementById("com1").style.display = "block";
  document.getElementById("com1").innerHTML = comentario1();
}
document.getElementById(12).onclick =  function(){
  deshabilitar("uno");
  document.getElementById("rta1").innerHTML = incorrecto();
  document.getElementById("rta1").style.display = "inline";
  document.getElementById("rta1").style.background = "red";
  document.getElementById("com1").style.display = "block";
  document.getElementById("com1").innerHTML = comentario1();
}
document.getElementById(13).onclick =  function(){
  deshabilitar("uno");
  document.getElementById("rta1").innerHTML = correcto();
  document.getElementById("rta1").style.display = "inline";
  document.getElementById("rta1").style.background = "lime";
  document.getElementById("com1").style.display = "block";
  document.getElementById("com1").innerHTML = comentario1();
}
//PREGUNTA 2
document.getElementById(21).onclick =  function(){
  deshabilitar("dos");
  document.getElementById("rta2").innerHTML = incorrecto();
  document.getElementById("rta2").style.display = "inline";
  document.getElementById("rta2").style.background = "red";
  document.getElementById("com2").style.display = "block";
  document.getElementById("com2").innerHTML = comentario2();
}
document.getElementById(22).onclick =  function(){
  deshabilitar("dos");
  document.getElementById("rta2").innerHTML = correcto();
  document.getElementById("rta2").style.display = "inline";
  document.getElementById("rta2").style.background = "lime";
  document.getElementById("com2").style.display = "block";
  document.getElementById("com2").innerHTML = comentario2();
}
document.getElementById(23).onclick =  function(){
  deshabilitar("dos");
  document.getElementById("rta2").innerHTML = incorrecto();
  document.getElementById("rta2").style.display = "inline";
  document.getElementById("rta2").style.background = "red";
  document.getElementById("com2").style.display = "block";
  document.getElementById("com2").innerHTML = comentario2();
}
