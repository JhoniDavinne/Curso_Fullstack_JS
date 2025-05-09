function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });	
}


// setInterval(() => console.log(mostraHora()), 1000);// fica executando o codigo a cada 1 segundo



const timer = setInterval(() => console.log(mostraHora()), 1000);

setTimeout(() => clearInterval(timer), 5000);// executando o codigo durante  5 segundos

setTimeout(() => console.log('Ola'), 8000);// executando o codigo depois de 8 segundos
