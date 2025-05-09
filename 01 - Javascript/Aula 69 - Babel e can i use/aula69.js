
//Observe a coverção no arquivo bundle.js

const nome = 'Jhoni Davinne';
const obj = { nome };
console.log(obj);
const novoObj = { ...obj };
console.log(novoObj);


class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}