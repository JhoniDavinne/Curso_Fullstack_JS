//Date
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date();
console.log(data.toString());

//                     ano, mes, dia, hora, minuto, segundo, milisegundo
// mes 0 = janeiro
// entao mes abril = 3
const data1 = new Date(2020, 3, 20, 15, 14, 30, 500);
console.log(data1.toString());

const data2 = new Date('2020-04-20 15:14:30'); // se for criado assim com string, o Date respeita o numero do mes corretamente.
console.log(data2.toString());
console.log('Dia ', data2.getDate());
console.log('Mês ', data2.getMonth() + 1); //Mês começa do zero
console.log('Ano ', data2.getFullYear());
console.log('Hora ', data2.getHours());
console.log('Min ', data2.getMinutes());
console.log('Seg ', data2.getSeconds());
console.log('ms ', data2.getMilliseconds());
console.log('Dia Semana ', data2.getDay()); //0 = domingo, 6 = sabado
console.log(Date.now()); //data em milisegundos

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function formataData(data) { 
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataBR = new Date();
const dataBrasil = formataData(dataBR);
console.log(dataBrasil);