const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Aula 14 - MondoDB - Conexão e primeiro Model',
    descricao: 'Conexão e primeiro Model'
})
    .then(dados => console.log(dados))
    .catch(err => console.log(err))
module.exports.paginaInicial = (req, res, next) => {
    
    console.log('Respondendo ao cliente...');
    res.render('index');

    console.log(`'paginaInicial' Olha o que tem na req.session.nome: ${req.session.nome}`);
    next();
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}