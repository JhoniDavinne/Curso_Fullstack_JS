const express = require('express'); //Importando o express
const app = express(); //Instanciando o express
const PORT = 3000; //Definindo a porta


// ? = da inicio as query string ( parametro)
// & = separa as query string (parametro)
//exemplo: http://localhost:3000/testes/?nome=Joaquim&idade=25
// req.query = {nome: 'Joaquim', idade: '25'}


/**
 :idUsuario e :grupo = parametros, tudo que vier depois do : ficar no req.params.
 '?' determina que o parametro pode ou não existir, 
    então passar idUsuario é opcional, -> :idUsuario?
    então passar grupo é opcional, -> :grupo?

 exemplo:
 app.get('/testes/:idUsuario?/:grupo?', (req, res) => { }



 Ja '?' na url = abertura de query string, separando as query string com '&.

 ex: http://localhost:3000/testes/?nome=Joaquim&sobrenome=Silva
 req.query = {nome: 'Joaquim', sobrenome: 'Silva'}
 req.params = {idUsuario: undefined, grupo: undefined} = {}

 ex: http://localhost:3000/testes/1?nome=Joaquim
 req.query = {nome: 'Joaquim'}
 req.params = {idUsuario: '1', grupo: undefined} = {idUsuario: '1'}

 ex: http://localhost:3000/testes/2/brasil?nome=Joaquim
 req.query = {nome: 'Joaquim'}
 req.params = {idUsuario: '2', grupo: brasil} = {idUsuario: '1', grupo: brasil}

 */
app.get('/testes/:idUsuario?/:grupo?', (req, res) => { 
    console.log(req.query);
    console.log(req.params);
    console.log(req.params.idUsuario);
    res.send(req.params);
})


app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
            Nome: <input type="text" name="nome"><br>
            Qualquer coisa: <input type="text" name="qualquecoisa">
            <button type="submit">Enviar</button>
        </form>`
    );
});


app.use(express.urlencoded({ extended: true })); // habilita o uso do req.body
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Oque foi digitado: ${req.body.nome} e ${req.body.qualquecoisa}`);
})



// liga o servidor express, no terminal digite: npm start
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})