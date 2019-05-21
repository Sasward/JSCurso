function cuandoCienAñosHoy(){
  const hoy = new Date(2019,4,21)
  const UN_AÑO = 1000*60*60*24*365
  let cuando = new Date(hoy - (UN_AÑO*100))
  console.log(`Si hubiera nacido el ${cuando.getDate()}/${cuando.getMonth()}/${cuando.getFullYear()}, hoy estuviera cumpliendo 100 años`)
}
cuandoCienAñosHoy()
