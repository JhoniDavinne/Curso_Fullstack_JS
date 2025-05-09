/**
 * Valores que avaliam em falso
 * 
 * false, 0, '', "", ``, null, undefined, NaN
 * 
 */

//           TRUE      TRUE        
console.log('Luiz' && 'Maria') //Maria, como não tem nenhum 'false', ele retorna o ultimo 'true' que ele checou

//           TRUE     FALSE     TRUE
console.log('Luiz' && 0 && 'Maria') //0, ele retorna o primeiro 'false' que ele achar.

//           TRUE     FALSE     TRUE        FALSE 
console.log('Luiz' && 0 && 'Maria' && null)//0, ele retorna o primeiro 'false' que ele achar.


// OUTRO EXEMPLO

function falaOi() {
    console.log('Oi');
}

const vaiExecutar = false;

vaiExecutar && falaOi(); // CURTO CIRCUITO, SO EXECUTARA falaOi se vaiExecultar for 'true'


// OUTRO EXEMPLO com OU

console.log(0 || false || null || 'LUIZ') //LUIZ

// OUTRO EXEMPLO
const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao) //Vermelho


