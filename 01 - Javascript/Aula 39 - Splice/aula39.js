//               -5      -4        -3          -2          -1
//                0       1         2           3           4
const nomes = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
const removidos = nomes.splice(2, 2, 'Luiz', 'Otávio') // apartir do indice 2, deleta 2 elementos e adiciona 'Luiz' e 'Otávio'
console.log('nomes:', nomes, removidos)//['João', 'Maria', 'Luiz', 'Otávio']['Antônio', 'Margarida']
// nomes.splice(indice, deletar, 'elemento1', 'elemento2', 'elemento3')

const nomes2 = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
const removidos2 = nomes2.splice(2, Number.MAX_VALUE); //apartir do indice 2, deleta todos os elementos
console.log('nomes2:',nomes2, removidos2);

const nomes3 = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
const removidos3 = nomes3.splice(1, 2); //apartir do indice 1, deleta 2 elementos	
console.log('nomes3:',nomes3, removidos3);


//simulando o shift
const nomes4 = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
nomes4.splice(0, 1);
console.log('nomes4:',nomes4);

//simulando o pop
const nomes5 = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
nomes5.splice(-1, 1);
console.log('nomes5:',nomes5);


//simulando o push
const nomes6 = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
nomes6.splice(nomes6.length, 0, 'Luiz'); // util quando quiser adicionar mais de um elemento.
console.log('nomes6:',nomes6);

//simulando o unshift
const nomes7 = ['João', 'Maria', 'Antônio', 'Margarida', 'Julia'];
nomes7.splice(0, 0, 'Luiz');
console.log('nomes7:',nomes7);