const mongoose = require('mongoose');
const Schema = require('../Model/modelUsuarios')


const dados = 
{
    status: "",
    metodo: "",
    result: ""
} 


async function add(req, res) {

    const usuario =
    {
        nome: req.body.nome,
        idade: req.body.idade,
        data_nasc: req.body.data_nasc,
        sexo: req.body.sexo,
        signo: req.body.signo,
        mae: req.body.mae,
        pai: req.body.pai,
        email: req.body.email,
        cep: req.body.cep,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        telefone: req.body.telefone,
        celular: req.body.celular,
    }

    if(!usuario.nome || !usuario.email)
    {

      res.status(404).json("Os campos nome e email são obrigatorios")

    }else
    {

      await new Schema(usuario).save()
      .then(resultado => {
          dados.metodo = "POST"
          dados.result = resultado
          res.status(200).json(dados);
        })
      .catch(() => {
        dados.status = "Erro"
        dados.metodo = "POST"
        dados.result = { mensagem: "Falha ao tentar salvar os dados"}
        res.status(400).json(dados);

        });
    }

}

async function views(req, res) {
     await Schema.find()
    .then(resultado => {
      dados.metodo = "GET"
      dados.result = resultado
      res.status(200).json(dados);
    })
  .catch(() => {
    dados.status = "Erro"
    dados.metodo = "GET"
    dados.result = { mensagem: "Nem um registro para exibir"}
    res.status(404).json(dados);

    });
}

async function id(req, res, id) {
  await Schema.findOne({_id: id})
  .then((registro) =>{
    dados.status = "Sucesso"
    dados.metodo = "GET"
    dados.result = registro || {mensagem: "Registro inexistente"}
    res.status(200).json(dados);
  })
  .catch(() => {
    dados.status = "Erro"
    dados.metodo = "GET"
    dados.result = { mensagem: "Falha ao tentar exibir as informações do _id:"+ id}
    res.status(404).json(dados);
  })
 
}

async function alter(req, res, id) {
  await Schema.findOne({_id: id})
  .then((registro) =>{

    if(!req.body.nome || !req.body.email)
    {
      dados.status = "Atenção"
      dados.metodo = "PUT"
      dados.result = { mensagem: "Os campos nome e email são obrigatorios"}
      res.status(404).json(dados);

    }else
    {
        registro.nome = req.body.nome,
        registro.idade = req.body.idade,
        registro.data_nasc = req.body.data_nasc,
        registro.sexo = req.body.sexo,
        registro.signo = req.body.signo,
        registro.mae = req.body.mae,
        registro.pai = req.body.pai,
        registro.email = req.body.email,
        registro.cep = req.body.cep,
        registro.endereco = req.body.endereco,
        registro.numero = req.body.numero,
        registro.bairro = req.body.bairro,
        registro.cidade = req.body.cidade,
        registro.estado = req.body.estado,
        registro.telefone = req.body.telefone,
        registro.celular = req.body.celular

        
        registro.save().then((dado) => 
        {
          dados.status = "Sucesso"
          dados.metodo = "PUT"
          dados.result = registro || {mensagem: "Atualizado com sucesso _id:" + id}
          res.status(200).json(dados);

        }).catch((e) => 
        {
          dados.status = "Erro"
          dados.metodo = "PUT"
          dados.result = { mensagem: "Os campos nome e email são obrigatorios"}
          res.status(400).json(dados);
          res.send({ erro: "Falha ao tentar atualizar os dados" })
        })

    }

  })
  .catch(() => {
    dados.status = "Erro"
    dados.metodo = "PUT"
    dados.result = {mensagem: "Registro inexistente"}
    res.status(404).json(dados);
  })

}


async function remove(req, res, id) {
  await Schema.deleteOne({_id: id})
  .then(() =>{
    dados.status = "Sucesso"
    dados.metodo = "DELETE"
    dados.result = registro || {mensagem: "Removido com sucesso _id:" + id}
    res.status(200).json(dados);
  
  })
  .catch(() => {
    dados.status = "Erro"
    dados.metodo = "DELETE"
    dados.result = {mensagem: "Falha ao tentar excluir os dados"}
    res.status(400).json(dados);
  })

}

module.exports = { add, views, id, alter, remove }