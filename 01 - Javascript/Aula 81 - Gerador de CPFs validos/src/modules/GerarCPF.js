import ValidaCPF from './ValidaCPF.js';

export default class GerarCPF { 
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    gerarNovoCPF() { 
        const cpfSemDig = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDig);
        const digito2 = ValidaCPF.geraDigito(cpfSemDig + digito1);
        const novoCPF = cpfSemDig + digito1 + digito2;
        return this.formatado(novoCPF);
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
}