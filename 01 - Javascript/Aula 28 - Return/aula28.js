function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2) //retorna uma funcão, onde multiplicador = 2
const triplica = criaMultiplicador(3) //retorna uma funcão, onde multiplicador = 3
const quadriplica = criaMultiplicador(4) //retorna uma funcão, onde multiplicador = 4

console.log(duplica(2)); //4
console.log(triplica(2)); //6
console.log(quadriplica(2)) //8