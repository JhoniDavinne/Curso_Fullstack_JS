const express = require('express'); //Importando o express
const app = express(); //Instanciando o express
const PORT = 3000; //Definindo a porta

const routes = require('./routes'); //Importando as rotas
app.use(routes); // habilita o uso das rotas do meu route.js


app.use(express.urlencoded({ extended: true })); // habilita o uso do req.body


// liga o servidor express, no terminal digite: npm start
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})