const  Router  = require('express').Router()
const {getTodosNumeros} = require('../helpers/getNumeros')



Router.get('/', async (req, res) => {
  try{
    const numeros = await getTodosNumeros(0)
    res.status(200).send(numeros)
  }catch(e){
  res.status(500).json({ message: 'Erro ao solicitar os dados'})
}
})

Router.get('/:page', async (req, res) => {
  try{
    const { page } = req.params
    const numeros = await getTodosNumeros(Number(page))
    res.status(200).json(numeros)
  }catch(e){
    res.status(500).json({ message: 'Erro ao solicitar os dados'})
  }  
})



module.exports = Router