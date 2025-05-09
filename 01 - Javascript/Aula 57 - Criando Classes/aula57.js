class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    fala(assunto) {
        console.log(`${this.nome} esta ${assunto}.`)
    }
}


//Observe no navegador, o prototipo, e o construtor, mais facilitado que factory com properties
//funções estando em _proto_ é mais performatico e usando menos memória.

const p1 = new Pessoa('Jhoni', 'Davinne')
const p2 = new Pessoa('Luiz', 'Ota')
const p3 = new Pessoa('Maria', 'Morales')
console.log(p1)
console.log(p2)
console.log(p3)
p1.fala('falando sobre JS')
p2.fala('falando sobre SQL')
p3.fala('falando sobre React')
