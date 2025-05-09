module.exports.paginaInicial = (req, res, next) => {
    
    console.log('Respondendo ao cliente...');
    res.render('index');

    console.log(`'paginaInicial' Olha o que tem na req.session.nome: ${req.session.nome}`); //obtido lado do primeiro middleware meuMiddleware
    next(); // CHAMA O PROXIMO MIDDLEWARE
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}