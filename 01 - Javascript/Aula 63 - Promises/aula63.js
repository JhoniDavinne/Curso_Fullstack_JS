function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) { //função que simula algo que pode demorar (Promise)
    setTimeout(function () {
        console.log(msg)
        if(cb) cb()
    }, tempo);
}

//tentando executar na ordem, não funciona pois cada um tempo um tempo aleatorio para executar.

// esperaAi('Fase 1', rand(1, 3));
// esperaAi('Fase 2', rand(1, 3));
// esperaAi('Fase 3', rand(1, 3));

//solucao PESSIMA:
// executando uma função após a outra./
//ISSO É IMPRATICAVEL, VIRA UMA ARVORE DE NATAL.

// esperaAi('Fase 1', rand(1, 3), function () {
//     esperaAi('Fase 2', rand(1, 3), function () {
//         esperaAi('Fase 3', rand(1, 3));
//     })
// });



//COM PROMISES ISSO SE RESOLVE.  (SOLUCAO TOP)

function esperaAi2(msg, tempo) { //função que simula algo que pode demorar (Promise)
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') {
            reject('BAD VALUE');
            return
        }
        setTimeout(function () {
            resolve(msg);
        }, tempo);
    })
}
// then() = quando terminar, quanto termina de executar, execute o codigo dentro do then()
esperaAi2('Fase 1', rand(1, 3))
    .then(response => {
        console.log(response);
        return esperaAi2('Fase 2', rand(1, 3));// executado apos a primeira promise, após terminar de executar o codigo da Frase 1
    })
    .then(response => {
        console.log(response);
        return esperaAi2(22, rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return esperaAi2(22, rand(1, 3));// forçando, cair na condição do if da funcão esperaAi2, para acionar o reject
    })
    .then(() => {
        console.log('Terminou') 
        
    })
    .catch( e => {
        console.log('ERRO: ', e)
    });

    console.log('Isso vai ser executado antes de qualquer promise');