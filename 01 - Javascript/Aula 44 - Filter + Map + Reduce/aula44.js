//Retorne a soma do dobro de todos os pares.
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (soma tudo)

let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares)
const dobro = pares.map(valor => valor * 2)
console.log(dobro)
const total = dobro.reduce((acumulator, valor) => acumulator + valor )
console.log(total)

numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const tudo = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2 )
    .reduce((acumulator, valor) => acumulator + valor)

console.log(tudo)