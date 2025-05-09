
//Só funciona para funções declaradas das formas "function nome()..." ou function expression "const = function()..."
// NÃO FUNCIONA PARA ARROW FUNCTIONS () => {}
function funcao() {
    console.log('oi')
    console.log(arguments)
    console.log(arguments[1])
}

funcao('Valor', 'Luiz', 2, 3, 4, 5) // passando parametros para uma função que não espera nenhum parametro.
// aonde vão para esses valores???, o js guarda dentro da função no objeto'arguments'

//exemplo de utilidades, função que some todos os valores passados.

function somaValores() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

somaValores(1, 2, 3, 4, 5, 6, 7)

// mesmo a função esperando argumentos, todos argumentos estao em arguments.
function somaValores2(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

somaValores2(1, 2, 3, 4, 5, 6, 7)

//===================================================================================================================================================================================================
//desetruturação de argumentos, array, objeto.
// AQUI JA DA PRA USAR EM ARROW FUNCTION
const somaValores3 = (...args) =>{
    let total = 0;
    for (let valor of args) {
        total += valor;
    }

    console.log(total);
}

somaValores3(1, 2, 3, 4, 5, 6, 7)

function funcao2 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao2({ nome: 'Luiz', sobrenome: 'Ota', idade: 30 })

function funcao3 ({nome, sobrenome, ...resto}) {
    console.log(nome, sobrenome);
    console.log(resto);
}    

funcao3({ nome: 'Luiz', sobrenome: 'Ota', idade: 30, estado: 'SP' })

function funcao4 ([nome, sobrenome, ...resto]) {
    console.log(nome, sobrenome);   
    console.log(resto);
}   

funcao4(['Luiz', 'Ota', 'SP', 'RJ'])


const conta = (operador, acumulador, ...numeros) =>{
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero  
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }   
    return acumulador
}

console.log(conta('+', 0, 20, 30, 40, 50))