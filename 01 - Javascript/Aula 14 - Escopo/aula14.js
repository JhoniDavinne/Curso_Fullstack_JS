/**
 * let tem escopo de bloco {... bloco}
 * var so tem escopo de função
 */

let verdadeiro = true;

let nome = 'Luiz';	/// Variavel que o console*3 vai achar primeiro e imprimir, nao achou procura fora do bloco.
var nome2 = 'Jessi';

if (true) {
    let nome = 'Jhoni';		  // Variavel que o console*1 vai achar primeiro e imprimir, nao achou procura fora do bloco.
    var nome2 = 'Maria';	  // redeclarando a variavel
    console.log(nome, nome2); //*1 Jhoni Maria

    if (verdadeiro) {
        let nome = 'Pedro';	     // Variavel que o console*2 vai achar primeiro e imprimir, nao achou procura fora do bloco.
        var nome2 = 'Josefa';    // redeclarando a variavel
        console.log(nome, nome2);//*2 Pedro Josefa
        nome = 'Henrique';       // vai atribuir o valor para o primeiro let que achar, que no caso é oque esta dentro deste bloco, senao iria sair do bloco, procurando let nome.
    }
}

console.log(nome, nome2)         //*3 Luiz Josefa
//OBS: nunca vai procura dentro de um bloco, somente dentro dele mesmo ou nos exteriores, ele nao entra dentro de um bloco dentro e si.
//



/**
 * Agora escopo de função
 */

var sobrenome = 'Otavio';	
var fulano = 'Lucas';
function falaOi() { // var so se comporta em function, declaradas desse jeito, em functions do tipo const seila = function(){}, ela se comporta como antes
    console.log(sobrenome); // ela vai procurar a variavel primeiro e imprimir, nao achou procura fora do bloco.
    var seila = 'Jhoni';
}
falaOi();
console.log(fulano); // Lucas, ja em escopo function var se comporta diferente, a function nao deixa acessa-la, como em ifs.

