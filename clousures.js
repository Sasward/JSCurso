function finalDeFrase(algo){
  return function (nombre){
    console.log(`Hola ${nombre} ${algo}`)
  }
}

//Se le asigna un nombre a la funcion que retorna para poder llamarla
const saludoColombiano = finalDeFrase("Parce")
//Ahora estas son funciones like: function colom(nombre){...}
const saludoArgentino = finalDeFrase(`che`)
/*
  Acá se llama la funcion de dentro
  con el nombre que se le asignó
  y se le envian los parametros que necesita
*/
saludoargentino("Sebas")
colom("Sebas")
