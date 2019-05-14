
var Sebas = {
   nombre: "" ,
   apellido: "",
   edad: 19
 }

 var Dario = {
    nombre: "Dario" ,
    apellido: "Gomez",
    edad: 27
  }

Sebas.nombre = prompt("Introduzca su nombre:", "Sebastian");
Sebas.apellido = prompt("Introduzca su Apellido:", "Ruiz");

function ultimaNombre(S){
// var nombre = S.nombre
  var {nombre} = S
  var lon  = nombre.length
  var ultima = S.nombre.charAt((lon-1))
  alert("la ultima letra de su nombre es " + ultima)
}
function ultimaApellido(S){
  var lon  = S.apellido.length
  var ultima = S.apellido.charAt((lon-1))
  alert("la ultima letra de su Apellido es " + ultima)
}

function cumpleaños(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}

function imprimirNombreYEdad(persona){
  alert("Hola me llamo " + persona.nombre + " y tengo " + persona.edad + " años.")
}

ultimaNombre(Sebas)
ultimaApellido(Sebas)
imprimirNombreYEdad(Dario)
imprimirNombreYEdad(Sebas)
var sebasMasViejo = cumpleaños(Sebas)
console.log(sebasMasViejo)
