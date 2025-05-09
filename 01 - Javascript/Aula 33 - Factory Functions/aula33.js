function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala : function(assunto) {
            return `${nome} está ${assunto}.`;
        }
    };
}   


const p1 = criaPessoa('Jhoni', 'Ota');

console.log(p1.fala('falando sobre JS'))


// ==================================================================================================================

//USANDO THIS. "this.nome" esta acessando o "nome -> propriedade objeto", e o "nome -> propriedade objeto" esta acessando o "nome parametro"

//Factory function (função fabrica)
//Constructor function (função construtora)
function criaPessoa2(nome, sobrenome, p, a, curso = 'Nenhum') { //nome parametro
    return {
        nome, //nome -> propriedade objeto
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre NADA') { // jeito 1 de declarar uma funcao dentro de um objeto, exemplo
            return `${this.nome} está ${assunto}.`;// poderia acessa direto o nome parametro, mais performatico, mas usamos this para exemplo.
        },
        falaPais : function() { // jeito 2 de declarar uma funcao dentro de um objeto, exemplo
            return `Meu pais é ${this.pais}`; //pais vindo do "pais -> propriedade objeto", pois nao existe o pais parametro, obviamente, entao é assim que se captura a propria propriedade, usando this.
        },
        imc(){ // jeito 3 de declarar uma funcao dentro de um objeto, exemplo
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        //Getter
        get imc2(){ // jeito 4 de declarar uma funcao dentro de um objeto, exemplo
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        peso: p, //peso -> propriedade objeto
        altura: a, //altura -> propriedade objeto
        curso: curso, //curso -> propriedade objeto
        pais: 'Brasil', //pais -> propriedade objeto
    };
}   


const p2 = criaPessoa2('Luiz', 'Ota', 90, 1.85);
const p3 = criaPessoa2('Jhoni', 'Davinne', 84, 1.83,  'JavaScript');
console.log(p2.fala('falando sobre JS'))
console.log(p2.fala())

console.log(p2.falaPais())

console.log(p2)
console.log(p3)

console.log(p2.curso)
console.log(p3.curso)

console.log(p2.imc())

console.log(p2.imc2)


console.log(p3.nomeCompleto)
p3.nomeCompleto = 'Jhonilha Morales';
console.log(p3.nomeCompleto)


