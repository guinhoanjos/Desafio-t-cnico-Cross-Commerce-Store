const express = require('express')
const app = express()
const getNumeros = require('./controllers/getController')


app.use('/', getNumeros)



app.listen(3000, () => console.log('i`m alive'))