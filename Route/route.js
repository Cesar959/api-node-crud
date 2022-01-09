const express = require('express').Router
const controlerUsuarios = require('../Controler/controlerUsuarios')

const app = express()

app.get('/', (req, res) => {
    controlerUsuarios.views(req, res)
})

app.get('/:id', (req, res) => {
    controlerUsuarios.id(req, res, req.params.id)
})

app.post('/usuarios', (req, res) => {
    controlerUsuarios.add(req, res)
})

app.put('/usuarios/:id', (req, res) => {
    controlerUsuarios.alter(req, res, req.params.id)
})

app.delete('/usuarios/:id', (req, res) => {
    controlerUsuarios.remove(req, res, req.params.id)
})



module.exports = app