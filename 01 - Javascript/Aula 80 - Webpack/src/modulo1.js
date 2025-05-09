const nome = 'João';
const sobrenome = 'Silva';
export const idade = 30;


export function soma(x, y) {
    return x + y
}


export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

export { nome as nome2, sobrenome as default }