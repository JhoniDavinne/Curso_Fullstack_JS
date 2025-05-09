
//similar ao default
// module.exports = function (x, y) {
//     return x * y;
// }

/* tanto que mesmo aqui dentro sendo exportado, daria para: */
//console.log(module.exports(2, 3));



//similar ao default
module.exports = class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falarNome() {
        return `Ola, ${this.nome} ${this.sobrenome}!`;
    }
}



