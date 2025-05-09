//705.484.450-52 070.987.720-03

/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0. 

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0. 
*/

const strCPF1 = "705.484.450-52";
const strCPF2 = "070.987.720-03";

/**
 * Valida um CPF, verificando se ele atende ao padrão de validacao de CPF.
 * 
 * @param {string} cpf - O CPF a ser validado, com ou sem formatação (pontos e traço).
 */
function validadorCpf(cpf) {
    
    const strLimpa = cpf.replace(/\D/g, '');
    let cpfSDig = strLimpa.slice(0, -2);

    const recursivaSomaDig = (cpfSDig, n = cpfSDig.length + 1) => n < 2 ?
        0 : n * cpfSDig[cpfSDig.length - n + 1] + recursivaSomaDig(cpfSDig, n - 1);

    const defineDigito = (n) => 11 - (n % 11) > 9 ?
        0 : 11 - (n % 11);

    let d1 = defineDigito(recursivaSomaDig(cpfSDig));
    let d2 = defineDigito(recursivaSomaDig(cpfSDig + d1));

    return `${cpfSDig}${d1}${d2}` === strLimpa ? 'CPF VÁLIDO' : 'CPF INVÁLIDO';
}

console.log(validadorCpf(strCPF1)); //validadorCpf('705.484.450-52')); 
console.log(validadorCpf(strCPF2)); //validadorCpf('070.987.720-03'));
console.log(validadorCpf("123.456.789-10"));


//========================================== OUTRO JEITO ====================================================================================================================================
function validadorCpf2(cpf) {
    const strLimpa = cpf.replace(/\D/g, '');
    let cpfSemDigitos = strLimpa.slice(0, -2);
    function getDigito(cpf){
        let resultante = 0;
        for (let n = cpf.length + 1; n >= 2; --n) {
            resultante += n * cpf[cpf.length - n + 1];
        }

        return 11 - (resultante % 11) > 9 ? 0 : 11 - (resultante % 11);
    }
    
    let d1Get = getDigito(cpfSemDigitos);
    let d2Get = getDigito(cpfSemDigitos + d1Get);

    let resultado = `${cpfSemDigitos}${d1Get}${d2Get}` === strLimpa ? console.log('CPF VÁLIDO') : console.log('CPF INVÁLIDO');

    return resultado
}


validadorCpf2(strCPF1);