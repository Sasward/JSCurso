class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura
  }

  saludar(funcionParametro){
    var { nombre, apellido, altura } = this
    console.log("Hola, soy " + nombre + " y mido " + altura.toFixed(2))
    if(funcionParametro){
      funcionParametro(nombre,apellido)
    }
  }

  esAlto(){
    return this.altura >= 1.8
  }
}

class Desarrollador extends Persona{
  contructor(nombre, apellido, altura){
    this.nombre = nombre,
    this.apellido = apellido
    this.altura = altura
  }

  saludar(funcionParametro){
    /*

    Desestructurando el objeto con las variables
    es lo mismo que poner:
    var nombre = this.nombre
    var apellido = this.apellido
    var altura = this.altura

    */
    var { nombre, apellido, altura } = this
    console.log("Hola, soy " + nombre + " y soy Desarrollador" )
    // SI la funcion dentro del if existe, devuelve un true, pero si es undefined o no se pasa por parametro, devuelve false
    if(funcionParametro){
      funcionParametro(nombre,apellido, true)
    }
  }
}

// Persona.prototype.saludar = function () {
//   console.log("Hola, soy " + this.nombre + " y mido " + this.altura.toFixed(2))
// }

function ResponderSaludo(nombre,apellido, esDev){
  console.log("Hola, Buen día " + nombre)
  if(esDev){
    console.log("Ah, no sabía que eras Desarrollador")
  }
}

var pedro = new Persona("Pedro","asdfgh", 1.70)
var pedrito = new Desarrollador("Pedrito","asdfg", 1.81)
pedro.saludar(ResponderSaludo)
pedrito.saludar(ResponderSaludo)
pedrito.saludar()
