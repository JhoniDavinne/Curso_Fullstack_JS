let nome = 'Jhoni';

console.log(`O nome do usuario e ${nome}`);

/** 
 * Diferente de let e var.
 * 
 * var pode ser declarado 2 vezes e isso é um problem a ja let, retorna um erro, 
 * o correto é sempre usar let, let é uma correção para var. 
 * let foi Implementado no ECMAScript 2015 (ES6) -> padronização do Javascript
 * exemplo abaixo
 *  */ 


//  observe que é possivel declarar duas vezes, usando let nao é possivel.
// NÃO USAR ISSO NUNCA
    palavra0 = 'teste'; //NUNCA DECLARE UMA VARIAVEL SEM SEU TIPO
var palavra1 = 'teste'; //NUNCA USE VAR, PARA NADA.
var palavra1 = 'teste'; //NUNCA USE VAR, PARA NADA.

//  resulta erro, pois let nao pode ser declarado duas vezes
let palavra2 = 'teste';
//  let palavra2 = 'teste'; //


const teste = 'teste';
const teste1 = "teste";
const teste2 = `teste`;

console.log( (teste ==  teste1), (teste == teste2), (teste1 == teste2));


//VARIAVEIS
//STRING, NUMBER, UNDEFINED, NULL, BOOLEAN, SYMBOL

/**
 * Referência ao mesmo objeto: Em JavaScript, arrays (assim como objetos) são tipos de referência, ou seja, as variáveis a e b não contêm os valores do array diretamente, 
 * mas sim uma referência ao local na memória onde o array está armazenado.Quando você faz const b = a;, você não está criando uma cópia do array, mas está fazendo com que 
 * 'b' aponte para o mesmo array que 'a' aponta.
 * 
 * Modificando o array através de 'a': Quando você executa b.push(4);, você está modificando o array referenciado por 'a'. 
 * Como 'a' e 'b' apontam para o mesmo array, a modificação também será visível em 'a'.
 * 
 * Resultado: No final, 'a' e 'b' vão exibir o mesmo conteúdo porque ambos apontam para o mesmo array. Então, o console mostrará:
 */

let a = [1, 2, 3];  // 'a' aponta para o array [1, 2, 3]
let b = a;          // 'b' aponta para o mesmo array que 'a'
b.push(4);            // Adiciona o valor 4 ao array
console.log(`a: ${a}, b: ${b}`);    // Exibe ambos os arrays




/**
 * Ja quando é tipo primitivos isso nao acontece
 */

let c = 2; 
let d = c;
c = 3;          
console.log(`c: ${c}, d: ${d}`);


/**
 * Aritméticos
 *  + Adicão / Concatenação
 *  - Subtração
 *  * Multiplicação
 *  / Divisão
 *  % Resto
 *  ** Potencia
 *
 * 
 * Ordem de precedência:
 * 1. ()
 * 2. **
 * 3. * / % 
 * 4. + -
*/
const num1 = '10';
const num2 = 20;
console.log(num1 * num2);


/**
 * Ordem do incremento / decremento faz diferencas:
 * 1. ++num
 * 2. num++
*/

// primeiro ele faz a instrucao e depois incrementa o valor logo nao sai no console.

let contador = 1;
console.log(contador++); // 1
console.log(contador); // 2

// agora se invertermos o incremento, ele incrementa primeiro e depois faz a instrucao
let contador1 = 1;
console.log(++contador1); // 2
console.log(contador1); // 2

 /**
  * Incrementos maiores / Operadores de atribuição
  */

 let incremento = 1;
incremento += 5;
console.log(incremento);
incremento *= 5;
console.log(incremento);
incremento -= 5
console.log(incremento);
incremento **= 5
console.log(incremento);


//NaN = Not a Number 
const num3 = 10;
const num4 = 'cinco';
console.log(num3 * num4); //NaN

const num5 = 10;
const num6 = parseInt('5'); //parseInt('5') -> vai retornar 5, vira inteiro;
console.log(num5 * num6);

const num7 = 10;
const num8 = parseFloat('5.2'); //parseFloat('5.2') -> vai retornar 5.2, vira float
console.log(num8 * num7);

const num9 = 10;
const num10 = Number('5.2'); //Number('5.2') -> vai retornar 5.2, vira numero float no caso do exemplo
console.log(num8 * num7);