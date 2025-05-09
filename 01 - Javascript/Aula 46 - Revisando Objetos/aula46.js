//Literal
const pessoa = {
    nome: 'Jhoni',
    sobrenome: 'Davinne'
}


const chave = 'nome'

console.log(pessoa.nome);
console.log(pessoa[chave]);
console.log(pessoa['nome']);

//Usando construtos
const pessoa2 = new Object();
pessoa2.nome = 'Jhoni';
pessoa2.sobrenome = 'Davinne';

//novo array, modos:
const arraY = Array();
const arraY2 = [];



//===========================================================

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // trava os atributos de forma nao ser mais possivel alterar
}


const jhoni = new Pessoa('Jhoni', 'Davinne');
jhoni.nome = 'Luiz'// tentando mudar para mostrar que esta travado.


console.log(jhoni)// Pessoa { nome: 'Jhoni', sobrenome: 'Davinne' }






