// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> new

//usam ; inves de virgula
//tem variaveis internas que podem ser inacessiveis

function Pessoa(nome, sobrenome) {
    //privadas
    const ID = 123456;
    const metodoInterno = function () {
        
    };
    //Atributos ou metodos publicos
    this.nome = nome; //Pessoa.nome = nome
    this.sobrenome = sobrenome; //Pessoa.sobrenome = sobrenome
    this.metodo = () => {
        console.log(`${this.nome} ${this.sobrenome}`)
    };
}

const p1 = new Pessoa('Jhoni', 'Davinne')

p1.metodo();