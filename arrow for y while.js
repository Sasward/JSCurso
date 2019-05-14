var Sebas = {
   nombre: "" ,
   apellido: "",
   edad: 19,
   peso: 55
 }

const CAMBIO_DE_PESO = 0.2
const DIAS_DEL_AÑO = 365
var pesoInicial = Sebas.peso
function esJovenFun(persona){
 // if (persona.edad >= 14 && persona.edad <= 28) return true
 return (persona.edad >= 14 && persona.edad <= 28)
}

//Arrow Function e inLine function
// con las llaves en los parametros estamos desestructurando el objeto para que reciba algo que tenga un atributo edad
const esJovenArrow = ({ edad }) => (edad >= 14 && edad <= 28)
const subirDePeso = (persona) => persona.peso += CAMBIO_DE_PESO
const bajarDePeso = (persona) => persona.peso -= CAMBIO_DE_PESO

console.log(esJovenFun(Sebas))
// "!" imprimir la negación de la función
console.log(!esJovenArrow(Sebas))
console.log("Al inicio del año " + Sebas.nombre + " pesa: " + Sebas.peso + "kg")
while(Sebas.edad < 25){
  for (var i = 1; i <= DIAS_DEL_AÑO; i++){
      var random = Math.random()
      if(random < 0.25){
        subirDePeso(Sebas)
      }
      else if(random < 0.5){
        bajarDePeso(Sebas)
      }
  }
  Sebas.edad++
}
console.log(pesoInicial)
console.log(Sebas.peso.toFixed(1))
