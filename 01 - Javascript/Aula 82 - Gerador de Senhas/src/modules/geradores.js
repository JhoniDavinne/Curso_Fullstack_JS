
//https://pt.wikipedia.org/wiki/ASCII
/**
 
 Decimal ASCII: 65 - 91 = A -> Z
 Decimal ASCII: 97 - 123 = a -> z
 Decimal ASCII: 48 - 58 = 0 -> 9
 Decimal ASCII: 33 - 47 = ! -> /
 Decimal ASCII: 58 - 64 = : -> @
 Decimal ASCII: 91 - 96 = [ -> `
 Decimal ASCII: 123 - 126 = { -> ~
 */
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gerarMaiuscula = () => String.fromCharCode(rand(65, 91));
const gerarMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const gerarSimbolo = () => {
    return (
        String.fromCharCode(rand(33, 47)) + 
        String.fromCharCode(rand(58, 64)) +
        String.fromCharCode(rand(91, 96)) +
        String.fromCharCode(rand(123, 126))
    );
}

export default function gerarSenha (qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(gerarMaiuscula());
        minusculas && senhaArray.push(gerarMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(gerarSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}