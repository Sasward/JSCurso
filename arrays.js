var Sebas = {
  nombre: "Sebastian",
  edad: 19
}

var Simon = {
  nombre: "Simon",
  edad: 17
}

var Santiago = {
  nombre: "Santiago",
  edad: 21
}

var Kennier = {
  nombre: "Kennier",
  edad: 19
}

var Juanita = {
  nombre: "Juanita",
  edad: 16
}

var Miguel = {
  nombre: "Miguel",
  edad: 13
}

const MAYORIA_DE_EDAD = 18
const esMenor = ({ edad }) => edad < MAYORIA_DE_EDAD
var personas = [Sebas,Simon,Santiago,Kennier,Juanita,Miguel]
const añosADias = persona => ({
  ...persona,
  edad: persona.edad * 365
})
var personasDias = personas.map(añosADias)
console.log(personasDias)
var menoresDeEdad = personas.filter(esMenor)
// for (var i = 0; i < personas.length; i++) {
//   console.log(personas[i].edad)
// }
