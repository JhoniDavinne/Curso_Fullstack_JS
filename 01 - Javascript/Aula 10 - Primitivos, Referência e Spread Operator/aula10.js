/** -----------------------------------------------------------------------------------------------------
 * Primitivos (imutáveis) - string, number , boolean, undefined, null, bigint, symbol
 * 
 */

let nome = 'Jhoni';
console.log(nome[0]); // J

/**
 * o valor de nome não pode ser modificado, pois é imutável, nao conseguidos mudar o valor,
 * mas podemos reatribuir um novo valor
 * 
 * por exemplo:	
 */

let nome1 = 'Jhoni';    // atribuindo um valor a variável nome1.
nome[0] = 'L';          // tentando modificar o valor.
console.log(nome1[0]);  // J, não ira modificar o valor, permanesse o valor antigo.

nome1 = 'Luiz'; // reatribuindo um novo valor.
console.log(nome1[0]); // L

/**
 * Outra caracteristica é que tipos primitivos, copiam o valor,
 * diferente do mutaveis, que o valor é uma referencia do local na memória.
 * 
 * Exemplo:
 */

let a = 'A';
let b = a; //Literalmente uma CÓPIA, NÃO é uma referência, NÃO aponta para o mesmo local na memória
// Variavel 'b', mantem o seu valor, independente da variável 'a' mudar seu valor, durante o codigo.
console.log(a, b); // A A

a = 'Outra coisa';
console.log(a, b); // Outra coisa A

b = 'C';
console.log(a, b); // Outra coisa C



/**  -----------------------------------------------------------------------------------------------------
 * Referência (mutaveis) - array, object, function
 * Passados por referência
 * 
 * Exmplo:
 * 
 */


let aa = [1, 2, 3];
let bb = aa; //Apontando para o mesmo local na memória, Referencia, NÃO é uma CÓPIA.
let cc = bb; //Apontando para o mesmo local na memória, Referencia, NÃO é uma CÓPIA.
console.log(aa, bb);

// SE EU ALTERAR O VALOR DE 'aa', VAI ALTERAR O VALOR DE 'bb', ASSIM COMO SE EU ALTERAR O VALOR DE 'bb', VAI ALTERAR O VALOR DE 'aa'.

bb.push(4);
console.log(aa, bb); // [1, 2, 3, 4] [1, 2, 3, 4]

aa.push(5);
console.log(aa, bb); // [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]

console.log(cc); // [1, 2, 3, 4, 5]

//AMBOS APONTAM PARA O MESMO LOCAL NA MEMORIA.


/** -----------------------------------------------------------------------------------------------------
 * Como copiar Mutaveis?  Usando o Spread Operator
 * 
 * Exemplo:
 */

let aaa = [1, 2, 3];
let bbb = [...aaa]; //Copia o array. agora 'bbb' aponta para um novo local na memória, diferente do 'aaa'.
// valor de 'bbb' totalmente independente do valor de 'aaa'.
bbb.push('Luiz');
aaa.pop();
console.log(aaa, bbb); // [1, 2] [1, 2, 3, 'Luiz']

//Outro exemplo:

const aObj = { nome: 'Luiz', sobrenome: 'Ótavio' };
const bObj = { ...aObj }; //Copia o objeto.

aObj.nome = 'Jhoni';
console.log(aObj, bObj); // { nome: 'Jhoni', sobrenome: 'Ótavio' } { nome: 'Luiz', sobrenome: 'Ótavio' }

