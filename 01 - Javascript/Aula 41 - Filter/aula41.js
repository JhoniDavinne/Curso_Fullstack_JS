//Filter -> sempre vai retornar, com a mesma quantidade de elementos ou menos
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Retornar numeros maiores que 10
// function callbackFilter(valor, indice, array) {
//     console.log(valor, indice, array);
//     return valor > 10;// retorno booleano
// }

// const numerossMaior10 = numeros.filter(callbackFilter) 

//Retornar apenas os pares
const pares = numeros.filter((valor) => valor % 2 === 0);
console.log(pares);

//Retornar numeros maiores que 10, arrow
const numerosMaior10 = numeros.filter(valor => valor > 10) 
console.log(numerosMaior10);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

//Retornar pessoas que possuem nome com 6 letras ou mais
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
console.log(pessoaComNomeGrande);

//Retornar pessoas com mais de 50 anos
const pessoaMaior50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoaMaior50);

//Retornar pessoas que tem a ultima letra A
const pessoaTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoaTerminaComA); 