import gerarSenha from "./geradores";

const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maisculas');
const chkMinisculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenhaBtn = document.querySelector('.gerar-senha');


export default () => {
    gerarSenhaBtn.addEventListener('click', () => {
        const senha = gera();
        document.querySelector('.senha-gerada').textContent = senha;
    });
}

function gera() {
    const senha = gerarSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinisculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado';	
}