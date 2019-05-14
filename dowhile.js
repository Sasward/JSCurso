var contador = 0
const Llueve = () => Math.random() < 0.20

do{
  contador++
}while(!Llueve())

if(contador === 1){
console.log("Fui a ver si llovía 1 vez")
}else{
console.log("Fui a ver si llovía " + contador + " veces")
}
