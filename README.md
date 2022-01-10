<h1 align="center"> API Node RESTful Crud </h1>

<p align="center">
    <img src="DOC/banner-doc-crud.jpg" alt="imagem-site" width="600" height="auto">
</p>


Projeto API Node RESTful Crud (Create, Read, Update, Delete)

## Descrição

O projeto é uma API RESTful aonde é possível cadastrar, alterar, ler e excluir usuários. Interface de Programação de Aplicações (português) cuja sigla API provém do Inglês Application Programming Interface, é um conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades. 

API conta com 5 funcionalidades básicas: obter todos os registros, selecionar um único registro, cadastrar, atualizar e deletar o registro. Até o momento não foi implementado um sistema de autenticação para utilizar a API, possibilitando assim a utilização pública da mesma. 

Para isso foi utilizado o Node junto com o Express.js para realizar o roteamento das rotas da API que obtém os dados do mongodb atlas. A arquitetura é baseada no MVC e também foi trabalhado algumas regras de negócio internamente. Na pasta DOC você encontra alguns registros prontos para efetuar teste na aplicação.

## Rotas:

É a mesma rota para todos o que diferencia é o método, para GET e DELETE é utilizado o _id do registro como parâmetro. Além disso o único serviço disponível até o momento é "usuários".

**Aviso:** Os campos nome e email são obrigatórios  tanto no cadastramento e atualização do registro.

### POST
Cadastra os dados no banco de dados

```bash 
https://seudominio.com/usuarios
```

### GET
Traz todos os registros

```bash  
https://seudominio.com/
```

### GET
Traz um registo específico (o caso em questão, vai trazer os dados referente ao _id 61d5a336536071e70982695b)

```bash  
https://seudominio.com/61d5a336536071e70982695b
```

### PUT
Atualiza os dados no banco de dados. 

```bash  
https://seudominio.com/usuarios/
```

### DELETE
Excluir o registro baseado no _id (o caso em questão, vai excluir os dados referente ao _id 61d5a336536071e70982695b)

```bash  
https://seudominio.com/usuarios/61d5a336536071e70982695b
```


## Instalação Local

Para executar esse projeto você precisara do [Node](https://nodejs.org/en/).

Por meio dele sera baixado todas as depedencias do projeto, depois de instalado execute os comandos abaixo na linha do terminal.

1) para baixa todas as dependencias do projeto

```bash  
npm install
```

2) altere o arquivo .envi-exemplo para .env, ele contém as variaveis de ambiente 
que serão usadas no projeto.


2) Edite as configurações padrão do arquivo .env

```bash  
PORTA = "Porta TCP aonde o servidor vai ser conectar"
```

```bash  
BANCO = "Nome do banco de dados"
```

```bash  
USUARIO_BANCO= "Nome do usuario para conectar o banco de dados"
```

```bash  
SENHA_BANCO= "Senha para conectar ao banco de dados"
```

```bash  
CLUSTER = "Cloud que vai armazenar as informações"
```

P.S: No caso em questão o projeto está utilizando o [MongoDB Atlas](https://www.mongodb.com/atlas/database), por acaso estive usando outro banco de dados, faça a configuração para o proprio.


## Status do Projeto

**Concluido**: O projeto esta terminado, não havera futuras alterações de funcionalidade.


## Construído com

* [Node](https://nodejs.org/en/) - Em computação, JSON, um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas, especificado por Douglas Crockford em 2000, que utiliza texto legível a humanos, no formato atributo-valor.

* [Express.js](https://nodejs.org/en/) - Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.

* [Dotenv](https://www.w3schools.com/js/js_json_intro.asp) - Essa é a ferramenta utilizada para orquestrar as variáveis ambiente de um projeto. O nome dela sugere o arquivo em que as informações ficarão, dot que é ponto em inglês acrescido de env , então temos o arquivo . env que é composto de chaves e valores.

* [Mongoose](https://www.php.net/manual/pt_BR/intro-whatis.php) - Mongoose é uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.

* [Nodemon](https://www.w3schools.com/sql/) - O nodemon é um utilitário de interface de linha de comando (CLI) desenvolvido pelo @rem que encapsula seu aplicativo Node, monitora o sistema de arquivos e reinicia o processo automaticamente. Neste artigo, você irá aprender sobre a instalação e configuração do nodemon.

* [JSON](https://www.json.org/json-en.html) - Em computação, JSON, um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas, especificado por Douglas Crockford em 2000, que utiliza texto legível a humanos, no formato atributo-valor. 

## Versão das Linguagens e Ferramentas

#### Geral

* MongoDB Atlas - ""
* Dotenv - 10.0.0
* Express.js - 4.17.2
* Mongoose - 6.1.5
* Nodemon - 2.0.15

## Autor

* **Cesar dos Santos de Almeida** - *responsável pela construção e desenvolvimento do projeto*

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes


## Links

* [Documentação](https://cesar959.github.io/api-node-crud-simples/) - Link da Documentação





