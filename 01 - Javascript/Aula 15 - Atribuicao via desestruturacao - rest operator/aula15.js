// ...rest, ...spread

let a = 'A'; //A
let b = 'B'; //B
let c = 'C'; //C

const letras = [b, c, a];
[a, b, c] = letras; // atribuicao via desestruturacao
console.log(a, b, c);

const numeros = [1, 2, 3];
[a, b, c] = numeros; // atribuicao via desestruturacao
console.log(a, b, c);


//================================================================================================================================================================================================

const numerosArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const [primeiroNumero, segundoNumero, ...resto] = numerosArray;// atribuicao via desestruturacao
console.log(primeiroNumero, segundoNumero);
console.log(resto);
//cada elemento do array e atribuido a uma variável, baseado na ordem do array, sendo o primeiro o primeiroNumero, o segundo o segundoNumero e o resto o resto
//caso nao queria o resto, basta colocar o array entre colchetes, ou seja, [primeiroNumero, segundoNumero] = numerosArray;
//para copiar todo o array basta usar o spread operator, que ja foi ensinado na aula anterior, ou seja, [...copiaArray] = numerosArray;

//É possivel pegar valores de possições especificas de um array, exemplo:

const [um, , tres, , cinco, , , ,nove] = numerosArray;
console.log(um, tres, cinco, nove);


// outro exemplo nao muito usado
//                          0         
//                      0  1  2    0  1  2	  0  1  2
const numerosMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = numerosMatriz;
const [lista1, lista2, lista3] = numerosMatriz;
console.log(seis);

//================================================================================================================================================================================================

/**
 * Agora usando objetos, como exemplo:
 */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Ota',
    idade: 30,
    endereco: {
        rua: 'Rua ABC',
        numero: 1000,
        //bairro: 'Bairro ABC'
    },
    formacao: 'Graduado',
    // curso: 'JavaScript'
}

const { nome, sobrenome, curso = 'Sem curso'} = pessoa;
console.log(nome, sobrenome, curso);


const {nome : nomePessoa, curso : j = 'Sem curso'} = pessoa; // caso eu queria escolher o nome da variável
console.log(nomePessoa, j);

const {
    endereco: { rua: logradouro, numero, bairro = 'Sem bairro'} ,
    endereco
} = pessoa;

console.log(logradouro);
console.log(numero);
console.log(endereco);
console.log(bairro);

const { endereco: enderecoCompleto, ...restoPessoa } = pessoa;

console.log(enderecoCompleto);
console.log(restoPessoa);

