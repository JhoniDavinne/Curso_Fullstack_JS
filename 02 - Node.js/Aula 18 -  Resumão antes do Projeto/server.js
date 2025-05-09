require('dotenv').config(); //Importa as variáveis de ambiente, salvas no arquivo .env (senhas, etc.),não publicado em repositorio.
/* Inicia o express */
    const express = require('express'); //Importa o módulo express.
    const app = express(); //Cria uma instância do express.
/* Porta do servidor */
    const PORT = 3000;
/* Importando as rotas*/
    const routes = require('./routes');
/* Importando o path para trabalhar com caminhos*/
    const path = require('path');
/*Modelador da base de dados usando Schema para o MongoDB*/
    const mongoose = require('mongoose');
    
/* Salva dados sessão e do cliente - cria cookie*/
    const session = require('express-session');
/*Para salvar dados da sessão(session) do cliente no MongoDB*/
    const MongoStore = require('connect-mongo');
/* Para trabalhar com mensagens flash*/
    const flash = require('connect-flash');
/* Helmet.js é uma biblioteca JavaScript de código aberto que ajuda a proteger seu aplicativo Node.js definindo diversos cabeçalhos HTTP. Ela atua como um middleware para o Express e tecnologias similares , adicionando ou removendo cabeçalhos HTTP automaticamente para atender aos padrões de segurança da web.
Embora não seja uma solução mágica, o Helmet dificulta a exploração de vulnerabilidades conhecidas por invasores. Ele ajuda a proteger aplicativos Node.js Express de ameaças de segurança comuns, como Cross-Site Scripting (XSS) e ataques de click-jacking .*/
    const helmet = require('helmet');
/**CSRF (Cross-Site Request Forgery) ele cria um token de segurança para proteger as solicitações de requisição para o servidor.*/
    const csrf = require('csurf');
/* Importando os middlewares - > regras de negócio para as rotas*/    
    const { middleware, outroMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');


/*Mongoose Conectando ao MongoDB e emitidindo um promise que ao retornar a conexão estiver pronta, o express disparar o evento 'pronto' -> gambiarra.*/
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.emit('pronto')
    })
    .catch(e => console.log(e));
    
/*Configurando o salvador de sessão, cria cookie com id que é likado ao banco de dados mongodb, onde tem a tabela sessions que salva as informações da sessão*/
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

app.use(sessionOptions);// habilita o uso do req.session
app.use(flash()); // habilita o uso do req.flash

app.use(express.urlencoded({ extended: true })); // habilita o uso do req.body
app.use(express.static(path.resolve(__dirname, 'public'))); //seta o caminho dos arquivos estáticos
app.set('views', path.resolve(__dirname, 'src', 'views')); //seta o caminho absoluto das views
app.set('view engine', 'ejs'); //engine de renderização, habilita possibilidade ifs, fors, etc em um html.
app.use(middleware); //regras de negócio para as rotas
app.use(outroMiddleware);//regras de negócio para as rotas

// app.use(helmet());  // habilita os recursos Helmet
/*
    Helmet no localhost (EVITE)
    O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema ainda em desenvolvimento, usando urls como "127.0.0.1", "localhost" ou até um servidor com IP externo, sem usar SSL (https), é recomendável desativá-lo. Ele pode bloquear importação de scripts e arquivos de CSS.

    Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) ou CSS, basta desativar o helmet para correção.

    Isso só ocorrerá em sistemas sem SSL (sem https na URL).

*/

app.use(csrf()); // habilita o uso do csrf
app.use(checkCsrfError); // habilita o uso do checkCsrfError, evita explosão de erro na tela do usuario expondo falhas do sistema.
app.use(csrfMiddleware); // habilita o uso do csrfMiddleware, cria um token de segurança usando crsf para proteger as solicitações de requisição para o servidor.
app.use(routes);// habilita o uso das rotas do meu route.js

// liga o servidor express, no terminal digite: npm start
app.on('pronto', () => {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
});