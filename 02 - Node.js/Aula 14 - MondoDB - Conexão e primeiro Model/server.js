const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const path = require('path');
const { middleware, outroMiddleware} = require('./src/middlewares/middleware');
const mongoose = require('mongoose'); //Importa o módulo mongoose
require('dotenv').config(); //Importa as variáveis de ambiente, salvas no arquivo .env (senhas, etc).


mongoose.connect(process.env.CONNECTIONSTRING) // process.env.CONNECTIONSTRING é uma variável de ambiente, existente no arquivo .env
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.emit('pronto')// quando a conexão estiver pronta, o express disparar o evento 'pronto';
    })
    .catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.use(middleware);
app.use(outroMiddleware);

app.on('pronto', () => { // quando o sinal do evento pronto for emitido, o express executa o seguinte:
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    }) 
})
