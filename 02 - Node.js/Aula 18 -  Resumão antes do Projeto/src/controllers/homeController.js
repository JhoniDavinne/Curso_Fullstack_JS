module.exports.paginaInicial = (req, res) => {

    res.render('index', { // variaveis acessiveis somente nesta view
        titulo: 'Home',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
    });

    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
}