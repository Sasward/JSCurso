const Sebas = {
  nombre: "Sebas",
  apellido: "Ruiz",
  edad: 19
}

function saludar(saludo = "Hola"){
  console.log(`${saludo} ${this.nombre}, como estas?`)
}

saludar.apply(Sebas)
saludar.apply(Sebas, ["Oelo"])
saludar.call(Sebas, "Hablalo")
const saludaASebas = saludar.bind(Sebas, "Pinche puto")
saludaASebas()
