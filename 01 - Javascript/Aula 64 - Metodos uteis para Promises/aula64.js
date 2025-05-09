function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) { //função que simula algo que pode demorar (Promise)
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    })
}


//Promise.all, Promise.race, Promise.resolve, Promise.reject


const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    // esperaAi(1000, rand(1, 3)), // se uma for rejeitada, o resultado é um erro só, rejeitando todas.
    'Outro valor'
];
// vai resolver todos os promises, e retornar um array com os valores
Promise.all(promises) // resolve o array de promises.
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })






const promises2 = [
    esperaAi('RESULTADO 1', rand(1, 3)),
    esperaAi('RESULTADO 2', rand(1, 3)),
    esperaAi('RESULTADO 3', rand(1, 3)),
];

// Retornar apenas a primeira promise que der resultado,
// porem ele executa as restantes escondidom e nao retorna.

//cuidado que no console.log o resutaldo desse Promise.race 
//pode sair primeiro que Promise.all acima, nao confuda os resultado. atenção no resultado..

Promise.race(promises2) 
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })


function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));