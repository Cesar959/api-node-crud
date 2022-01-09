const express = require('express')
const route = require('./Route/route')
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://" + process.env.USUARIO_BANCO + ":" + encodeURIComponent(process.env.SENHA_BANCO) + "@" + process.env.CLUSTER + ".pnimh.mongodb.net/" + process.env.BANCO + "?retryWrites=true&w=majority")
.then(() => 
{
    
    app.use(route)

    app.listen(process.env.PORT || 3000, () => 
    {
        console.log("Servidor Online");
    })

})
.catch(() => {
    console.log('Erro ao Conectado')
})
