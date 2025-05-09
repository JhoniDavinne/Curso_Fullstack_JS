const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const path = require('path');
const { middleware, outroMiddleware } = require('./src/middlewares/middleware');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
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
app.use(routes);



app.on('pronto', () => {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
})
