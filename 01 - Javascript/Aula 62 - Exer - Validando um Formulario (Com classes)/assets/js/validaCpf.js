class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpf = cpfEnviado;
        Object.defineProperty(this, 'cpf_limpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });

        Object.defineProperty(this, 'valido', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: ValidaCPF.validaCPF(this.cpf_limpo) 
        });
    }

    static validaCPF(cpf_limpo) {
        let cpfSDig = cpf_limpo.slice(0, -2);

        const recursivaSomaDig = (cpfSDig, n = cpfSDig.length + 1) => n < 2 ?
            0 : n * cpfSDig[cpfSDig.length - n + 1] + recursivaSomaDig(cpfSDig, n - 1);
        
        const defineDigito = (n) => 11 - (n % 11) > 9 ?
            0 : 11 - (n % 11);
        
        let d1 = defineDigito(recursivaSomaDig(cpfSDig));
        let d2 = defineDigito(recursivaSomaDig(cpfSDig + d1));

        return `${cpfSDig}${d1}${d2}` === cpf_limpo;
    }
}