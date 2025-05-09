module.exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(`Oque foi digitado: ${req.body.nome} e ${req.body.qualquecoisa}`);
}