
let form = document.querySelector('.form');
let resultado = document.querySelector('.resultado')
const resultadoFunc = (msg, error) => {
    resultado.innerHTML = `<p class=${error ? 'msg-erro' : 'msg-sucesso'}>${msg}</p>`
}

const calculaImc = (peso, altura) => (peso / (altura ** 2)).toFixed(2);

const calculaClassificacao = (imc) => {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let peso = Number(e.target.querySelector('.peso').value);
    let altura = Number(e.target.querySelector('.altura').value);

    if (!peso) {
        resultadoFunc('Peso informado é inválido', true)
        return;
    }
    if (!altura) {
        resultadoFunc('Altura informado é inválida', true)
        return;
    }

    retorno = {
        imc: calculaImc(peso, altura),
        classificacao: calculaClassificacao(calculaImc(peso, altura)) 
    } 
        
    resultadoFunc(`Seu IMC é ${retorno.imc} (${retorno.classificacao})`, false)
})
