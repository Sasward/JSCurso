function factorial(n){
  //Si no hay cache, pues creela
  if(!this.cache){
    this.cache = {}
  }
  debugger
  //Si el resultado que estamos pidiendo, esta en la cache, pues retornelo y ya
  if(this.cache[n]){
    return this.cache[n]
  }
  //Si no está, pues toca hacer los cálculos
  if(n === 0 || n === 1){
    return 1
  }else{
    debugger
    return this.cache[n] = n * factorial(n-1)
  }
}
