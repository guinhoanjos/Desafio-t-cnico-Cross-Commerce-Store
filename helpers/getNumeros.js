const axios = require('axios')


async function getNumeros(pageIndex){
  const numeros =  await axios({
    method: 'get',
    url: `http://challenge.dienekes.com.br/api/numbers?page=${pageIndex}`
  })
    .then(function (response) {
      return response.data
    });
    return numeros
}

async function getTodosNumeros(inicialPage){
  let todosNumeros = []
  let temNumeros = true
  let pageIndex = 1
  while(temNumeros){
    let numeros = await getNumeros(inicialPage + pageIndex)
    if(!numeros.numbers || pageIndex === 30 ){
      temNumeros = false
    } else{
      todosNumeros = [...todosNumeros, ...numeros.numbers]    
      pageIndex += 1
    }
  }
  return todosNumeros
}

module.exports = {
  getTodosNumeros
}
