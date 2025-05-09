const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const { middleware, outroMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

require('dotenv').config();

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.emit('pronto')
    })
    .catch(e => console.log(e));

const sessionOptions = session({
    secret: 'Davinne supremo',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em milésimos de segundos
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(middleware);
app.use(outroMiddleware);
// app.use(helmet());  // habilita os recursos Helmet

/*
    Helmet no localhost (EVITE)
    O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema ainda em desenvolvimento, usando urls como "127.0.0.1", "localhost" ou até um servidor com IP externo, sem usar SSL (https), é recomendável desativá-lo. Ele pode bloquear importação de scripts e arquivos de CSS.

    Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) ou CSS, basta desativar o helmet para correção.

    Isso só ocorrerá em sistemas sem SSL (sem https na URL).

*/
app.use(csrf());
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on('pronto', () => {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
});