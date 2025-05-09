
/** 
 1. for...of:
    Sintaxe: for (let pessoa of json) {  código  }

    Funcionamento: O loop for...of é uma construção de laço que percorre diretamente os elementos de um objeto iterável 
    (como arrays, strings, Map, Set, etc.). No caso de um array de objetos JSON, ele itera sobre cada elemento (cada objeto do array).
    
    Controle de fluxo: Você pode usar break, continue e return dentro de um for...of, o que oferece maior controle sobre o loop.
    
    Assíncrono: Não suporta diretamente funções assíncronas (como await) dentro do loop, mas pode ser combinado com for await...of.
*/




/**
 2. forEach:
    Sintaxe: json.forEach(pessoa => {  código })

    Funcionamento: O método forEach é um método de arrays que executa a função callback fornecida uma vez para cada elemento do array. 
    Ele não retorna valores e é usado para aplicar uma função a todos os elementos do array.

    Controle de fluxo: Não é possível usar break, continue ou return dentro de um forEach para interromper o loop ou saltar uma iteração. 
    Ele vai iterar sobre todos os elementos sem interrupção.

    Assíncrono: Não funciona bem com async e await da forma que você esperaria. 
    A execução não espera que as funções assíncronas dentro do forEach terminem.
*/

/**
    Diferenças principais:
    Controle do loop: for...of oferece mais controle, permitindo break, continue e return. No forEach, você não pode interromper ou pular iterações.

    Sintaxe: for...of é uma construção de laço, enquanto forEach é um método de array.

    Assíncrono: for...of pode ser facilmente combinado com await, enquanto forEach não lida bem com código assíncrono.

    Performance: Geralmente, a diferença de performance entre os dois é mínima e depende do uso. No entanto, 
    forEach pode ser ligeiramente mais lento em alguns casos, pois envolve chamadas de função.

    Ambos têm seu lugar dependendo das necessidades do seu código. Se você precisa de controle mais refinado, 
    o for...of seria melhor. Se você quer uma solução funcional, sem preocupação com interrupções, forEach é uma boa escolha.
*/


const frutas = ['maca', 'pera', 'banana'];

for (let i in frutas) { // cada i e uma posicao do array
    console.log(i, frutas[i]);
}

for (let i of frutas) { // cada i e um elemento do array
    console.log(i);
}


frutas.forEach((fruta, indice, array) => {
    console.log(indice, fruta);
})