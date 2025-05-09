module.exports.paginaInicial = (req, res, next) => {
    
    req.session.usuario = { nome: 'Jhoni', logado: true };
    console.log(req.session);
    // req.flash('info', 'Seja bem vindo');
    // req.flash('error', 'Algo deu errado');
    // console.log(req.flash('info'), req.flash('erro'));
    res.render('index');
    next();
}

exports.trataPost = (req, res) => {
    res.send(req.body);
}