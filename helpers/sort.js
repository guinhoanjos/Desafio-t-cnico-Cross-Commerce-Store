function menorNumero(data){
  let menorNumero = data[0];
  data.forEach((numero) =>{
    if(numero < menorNumero){
      menorNumero = numero
    }
  })
  return menorNumero
}

function removeNumero(data, menorNumero){
  const index = data.indexOf(menorNumero)
  data.splice(index, 1)
}

function ordenarNumero(data){
  let arrayNovo = []
  let arrayVelho = data.slice()
  let numeroMenor = 0
  while(arrayVelho.length  > 0){
    numeroMenor = menorNumero(arrayVelho)
    arrayNovo.push(numeroMenor)
    removeNumero(arrayVelho,numeroMenor)
  }
  return arrayNovo
}

module.exports = ordenarNumero
