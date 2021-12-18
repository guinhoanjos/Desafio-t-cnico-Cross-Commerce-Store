const  Router  = require('express').Router()
const {getTodosNumeros} = require('../helpers/getNumeros')
const ordenarNumero = require('../helpers/sort')



Router.get('/', async (req, res) => {
  try{
    const numeros = await getTodosNumeros(0)
    const numerosOrdenados = ordenarNumero(numeros)
    res.status(200).send(numerosOrdenados)
  }catch(e){
  res.status(500).json({ message: 'Erro ao solicitar os dados'})
}
})

Router.get('/:page', async (req, res) => {
  try{
    const { page } = req.params
    const numeros = await getTodosNumeros(Number(page))
    const numerosOrdenados = ordenarNumero(numeros)
    res.status(200).send(numerosOrdenados)
  }catch(e){
    res.status(500).json({ message: 'Erro ao solicitar os dados'})
  }  
})



module.exports = Router