module.exports.paginaInicial = (req, res) => {
    res.send(
        `<form action="/" method="POST">
            Nome: <input type="text" name="nome"><br>
            Qualquer coisa: <input type="text" name="qualquecoisa">
            <button type="submit">Enviar</button>
        </form>`
    );
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send("Você enviou o formulário");
}