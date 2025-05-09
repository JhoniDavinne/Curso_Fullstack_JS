///Reduce ->

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Some todos os números (reduce)

const total = numeros.reduce(function (acumulator, valor, indice, array){
    return acumulator += valor;
},0)
const total2 = numeros.reduce((a, b) => a + b)
console.log(total, total2)


//Retorne um array de números pares
const pares = numeros.reduce(function (acumulator, valor){
    if (valor % 2 === 0) acumulator.push(valor);
    return acumulator;
}, [])
console.log(pares)


//Retorne um array de números pares
const dobro = numeros.reduce(function (acumulator, valor){
    acumulator.push(valor * 2);
    return acumulator;
}, [])
console.log(dobro)


//Retorne um array de números pares
const somaDePAres = numeros.reduce(function (acumulator, valor){
    if (valor % 2 === 0) acumulator += valor;
    return acumulator;
}, 0)
console.log(somaDePAres)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

//RETORNE APENAS A PESSOA MAIS VELHA

const maisVelha = pessoas.reduce(function (acumulator, valor) {
    if (acumulator.idade > valor.idade) return acumulator     
    return valor
})

console.log(maisVelha)
