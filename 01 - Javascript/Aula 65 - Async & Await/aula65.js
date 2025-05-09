function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) { //função que simula algo que pode demorar (Promise)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }
            
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    })
}


//FEIO E VERBOSO

// esperaAi('Frase 1', rand())
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase
//     })
//     .then(fase => {
//         console.log('Terminamos na fase: ', fase);
//     })
//     .catch(e => console.log(e));


//COM ASYNC AWAIT



async function executa() {
    try {
        const fase = await esperaAi('Fase 1', rand());
        console.log(fase);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na Fase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();