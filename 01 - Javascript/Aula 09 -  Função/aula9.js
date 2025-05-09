//funções
// exemplos de como declarar umas função

//CLASSICO
function raizQuadrada(n) {
    return n ** 0.5;
}

console.log(raizQuadrada(25));

//FUNÇÃO ANONIMA
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(25));


//FUNÇÃO ARROW (ARROW FUNCTION)
const raiz2 = (n) => n ** 0.5;
console.log(raiz2(25));