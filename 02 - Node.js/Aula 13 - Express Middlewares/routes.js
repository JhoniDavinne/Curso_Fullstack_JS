const express = require('express'); //Importando o express
const route = express.Router(); //Instanciando o express Router

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');



function meuMiddleware(req, res, next) {
    req.session = { nome: 'Jhoni', sobrenome: 'Davinne' }
    console.log();
    console.log('Passei no seu  middleware');
    console.log();
    next();// CHAMA O PROXIMO MIDDLEWARE, NESSE CASO SERA O CONTROLLER.
}

//rotas da Home

//Primeiro  middleware (meuMiddleware) -> next() ->  Segundo middleware (homeController.paginaInicial) -> next() ->  Terceiro middleware (function(rq, res, next) {})
route.get('/', meuMiddleware, homeController.paginaInicial, function(rq, res, next) {
    console.log();
    console.log('Ainda estou aqui...');// ira renderizar depois da pagina ter sido apresentada ao cliente.
    console.log(`'ultimo middleware' Olha o que tem na req.session.nome: ${rq.session.nome}`); //obtido lado do primeiro middleware meuMiddleware
});
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaContato)

module.exports = route