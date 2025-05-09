const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');



function meuMiddleware(req, res, next) {
    next();
}

route.get('/', meuMiddleware, homeController.paginaInicial, function(rq, res, next) {});
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaContato)

module.exports = route