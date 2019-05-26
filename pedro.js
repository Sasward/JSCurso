const hoy = new Date()
class Persona {
  constructor(nombre, cumpleaños, edad) {
    this.name = nombre,
    this.birth = cumpleaños,
    this.age = edad
  }

  cumplirAños(){
    this.age = this.age + 1
  }

}

const sameDay = Persona => (Persona.birth.getDate() === hoy.getDate())
const sameMonth = Persona => (Persona.birth.getMonth() === hoy.getMonth())

const pedroNace = new Date(2000,04,26)
Pedro = new Persona("PDRO",pedroNace,18)

if(sameDay(Pedro) && sameMonth(Pedro)){
  Pedro.cumplirAños()
  swal(`FELIZ CUMPLEAÑOS ${Pedro.name}`, `YA TIENES ${Pedro.age} Y ERES MAS VIEJO QUE NUNCA :)`, "success")
}
