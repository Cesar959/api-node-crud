const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String
    },
    idade: 
    {
        type: Number
    },
    data_nasc:
    {
        type: Date
    },
    sexo:
    {
        type: String
    },
    signo:
    {
        type: String
    },
    mae:
    {
        type: String
    },
    pai:
    {
        type: String
    },
    email:
    {
        type: String
    },
    cep: 
    {
        type: Number
    },
    endereco:
    {
        type: String
    },
    numero:
    {
        type: Number
    },
    bairro:
    {
        type: String
    },
    cidade: 
    {
        type: String
    },
    estado: 
    {
        type: String
    },
    telefone:
    {
        type: String
    },
    celular:
    {
        type: String
    }
})

module.exports =  mongoose.model('usuarios', schema) 
