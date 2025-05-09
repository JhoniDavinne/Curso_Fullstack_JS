const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o 2');
        continue;
    }
    console.log(numero); // o numero 2 nao vai ser exibido, pois ele foi pulado pelo continue
}



for (let numero of numeros) {
    if (numero === 7) {
        console.log('Achei o numero 2, irei parar o loop');
        break;
    }
    console.log(numero); //vai ser impresso ate o numero 7 ser achado, depois ira parar.
}