const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Jhoni', sobrenome: 'Davinne' }
    console.log();
    console.log('Passei no seu  middleware');
    console.log();
    next();
}

route.get('/', meuMiddleware, homeController.paginaInicial, function(rq, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`'ultimo middleware' Olha o que tem na req.session.nome: ${rq.session.nome}`);
});
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaContato)

module.exports = route