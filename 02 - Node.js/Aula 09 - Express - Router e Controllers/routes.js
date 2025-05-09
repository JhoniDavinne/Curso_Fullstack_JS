const express = require('express'); //Importando o express
const route = express.Router(); //Instanciando o express Router

const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaContato)

module.exports = route