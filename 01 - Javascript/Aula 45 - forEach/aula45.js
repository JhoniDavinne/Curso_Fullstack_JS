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





let numeros = [10, 20, 30, 40];


numeros.forEach(element => {
    console.log(element)
});


numeros.forEach((valor, indice, array) => {
    console.log(valor, indice, array)
});


let total = 0;
numeros.forEach(valor => {
    total += valor;
});
console.log(total)