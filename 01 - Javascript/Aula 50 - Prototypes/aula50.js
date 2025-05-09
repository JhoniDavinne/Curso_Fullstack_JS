//OLHE O LOG DO NAVEGADOR

// Protypes
//Construtora -> molde (classe)

/**
 JavaScript é baseado em prótotipos para passar propriedades e métodos de um objeto para outro
 
 Definição de protótipo:
 Prótotipo é o termo usado para se referir ao que foi criado pela primeira vez,
 servindo de modelo ou molde para futuras produções.

 Todos os objetos tem uma referência interna para um protótipo (__proto__) 
 que vem da propriedade prototype da função construtora que foi usada para
 criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
 do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia 
 de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

 */


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`;//como esse metodo tem o mesmo nome do metodo criado no prototype abaixo, ele vai sobrescrever.
    //entao sabesse que o motor do Js vai procurar aqui dentro do objeto primeiro, dando prioridade para esse metodo nomeComleto, inves do outro la em baixo, isso caso esse
    // "this.nomeCompleto = () => `ORIGINAL:..."" esta descomentado.
    
}

//instancia
const pessoa1 = new Pessoa('Jhoni', 'Davinne'); // <-- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1)
console.dir(data)


//Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
};