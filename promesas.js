const URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

//Si el get es existoso, llegan los datos al primer parámetro del callback
//El parametro options es opcional, el get funciona así -> $.get(url,opcionesDelGet,callback())

function obtenerPersonaje(id){
  return new Promise(funPromesa)

  function funPromesa (resolve,reject) {
    const url = URL+PEOPLE_URL.replace(":id",id)
    $.get(url ,datosQueLlegan => resolve(datosQueLlegan)).fail(() => reject(id))
  }
}

async function getPersonajes() {
    var ids = [1,2,3,4,5,6,7,8,9,10]
    //El id es el v[i] del mapeo del array
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
    var datosQueLlegan = await Promise.all(promesas)
    var nombre = datosQueLlegan.map( n => n.name)
    for (var i = 0; i < nombre.length; i++) {
      console.log(nombre[i])
    }
  } catch (id) {
    console.log("Llamando al personaje número " + id + " se fué todo a la verga")
  }
}

getPersonajes()


// obtenerPersonaje(1)
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//     return obtenerPersonaje(2)
//   })
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//     return obtenerPersonaje(3)
//   })
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//     return obtenerPersonaje(4)
//   })
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//     return obtenerPersonaje(5)
//   })
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//     return obtenerPersonaje(6)
//   })
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//     return obtenerPersonaje(7)
//   })
//   .then(data => {
//     console.log("Hola, yo soy " + data.name)
//   })
//   .catch((id) => {
//     console.log("Llamando al personaje número " + id + " se fué todo a la verga")
// })
