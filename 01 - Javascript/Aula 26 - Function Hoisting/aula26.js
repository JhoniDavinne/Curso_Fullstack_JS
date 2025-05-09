// Declaracao de funcao (Function hoisting)

falaOi(); // chamar a função antes dela ser declarada, funciona, pois acontece o Function hoisting, 
// o motor do javascript eleva todas as declarações para o topo do arquivo na hora da execução


function falaOi() {
    console.log('oi');
}

// First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
    console.log('sou um dado')
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado)

//Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
};