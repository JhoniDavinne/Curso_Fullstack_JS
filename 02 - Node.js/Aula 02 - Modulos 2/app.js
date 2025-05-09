
//similiar ao default

// const multiplicacao = require('./mod');
// console.log(multiplicacao(2, 3));


const Humano = require('./A/B/C/mod');

const pessoa = new Humano('Joaquim', 'Silva');
console.log(pessoa);

console.log(pessoa.falarNome());



const path = require('path');
console.log(__dirname);
console.log(__filename);

console.log(path.resolve(__dirname, '..',));
console.log(path.resolve(__dirname, '..','..'));