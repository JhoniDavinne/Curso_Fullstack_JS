//Closure habilidade que a funcão tem de acessar seu escopo lexico. (pai)
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz'); // no scopo Closure o nome vai ser Luiz, para sempre.
const funcao2 = retornaFuncao('Jhoni'); // no scopo Closure o nome vai ser Jhoni, para sempre.
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(),funcao2())