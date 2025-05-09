const express = require('express'); //Importando o express
const app = express(); //Instanciando o express
const PORT = 3000; //Definindo a porta
const routes = require('./routes'); //Importando as rotas
const path = require('path');

app.use(routes); // habilita o uso das rotas do meu route.js
app.use(express.urlencoded({ extended: true })); // habilita o uso do req.body
app.use(express.static(path.resolve(__dirname, 'public')));//seta o caminho dos arquivos estáticos
app.set('views', path.resolve(__dirname, 'src', 'views')); //seta o caminho absoluto das views
app.set('view engine', 'ejs'); //engine de renderização, habilita possibilidade ifs, fors, etc em um html.

// liga o servidor express, no terminal digite: npm start
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})