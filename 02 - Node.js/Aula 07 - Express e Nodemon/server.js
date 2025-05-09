//ARQUIVO IGUAL DA AULA ANTERIOR, OQUE MUDA É QUE CONFIGURAMOS O NODEMON, QUE AJUDA
// A NOS ATUALIZAR O NOSSO SERVIDOR SEM TER QUE REINICIAR A CADA ALTERACAO, E TBM PARA INICIAR
// OS SERVIDOR NODEMON, ELE INICIA O SERVIDOR AUTOMATICAMENTE DO EXPRESS, EO MANTEM ATUALIZADO COM O CODIGO DIGITADO, 
// NO TERMINAL DIGITE: npm start,
// FOI CONFIGURADO UM SCRIPT NO PACKAGE.JSON, onde npm start = nodemon server.js


const express = require('express'); //Importando o express
const app = express(); //Instanciando o express
const PORT = 3000; //Definindo a porta

//http://localhost:3000/ <- GET -> Entregue a página /
//http://localhost:3000/sobre  <- GET -> Entregue a página /sobre
//http://localhost:3000/contato  <- GET -> Entregue a página /contato

//       Criar    Ler    Atualizar   Deletar
//CRUD   Create,  Read,  Update,     Delete
//       POST,    GET,   PUT,        DELETE


//req = requisição do cliente
//res = resposta do servidor


// rota get raiz
app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button type="submit">Enviar</button>
        </form>`
    );
});

// rota post raiz
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

// rota get contato
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
})

// liga o servidor express, no terminal digite: npm start
// app.listen(PORT);
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
    console.log(`Acessar http://localhost:${PORT}`);
})

