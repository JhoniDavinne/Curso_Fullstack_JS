class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

module.exports = { Pessoa };


const nome = 'Joaquim';
const sobrenome = 'Silva';

module.exports = {
    Pessoa,
    nome,
    sobrenome,
    falarNome: () => `Ola, ${nome} ${sobrenome}!`,// posso passar algo que nem existe diretamente.
    nao_existo: 'Nao existe'
};


//esse tipo de exports assim, so funciona se for module.exports= {}, nao funciona se for somente exports= {}
