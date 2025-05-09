//Qunado for importar em node.js se o arquivo for .js, nao precisa colocar a extensao .js, tanto faz colocar ou não.



/* Importa tudo: */
// const mod1 = require('./mod1');
// console.log(mod1.falarNome());

/*Importa somente 1 funcao*/
// const falarNome = require('./mod1').falarNome;
// console.log(falarNome());

/*Importa tudo e atribui a uma variavel uma funcao*/
// const mod1 = require('./mod1');
// const falarNome = mod1.falarNome;
// console.log(falarNome());

/*Importa tudo e desestrutura, obtendo as funcoes que precisamos*/
const {nome, sobrenome, falarNome} = require('./mod1');
console.log(falarNome());

/* */
const { Pessoa } = require('./mod2');
const pessoa = new Pessoa('Joaquim', 'Silva');
console.log(pessoa);


const path = require('path');

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));