//ARRAYS


let alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Joaquim'); //adiciona na primeira posicao
console.log(alunos);

alunos.pop(); //retira o ultimo
console.log(alunos);

alunos.shift(); //retira o primeiro
console.log(alunos);

alunos.push('Joaquim'); //adiciona na ultima
console.log(alunos);


console.log(alunos.slice(0, 2)); //retorna uma parte do array, como nas string
console.log(alunos.slice(-2, -1)); //retorna uma parte do array, como nas string

console.log(alunos.reverse()); //inverte o array

//apenas um exemplo. ficaram um buraca no array na posição deletada, nao é o ideal.
delete alunos[1]; //deleta o elemento da posicao 1


console.log(alunos);

console.log(typeof alunos); //object
console.log(alunos instanceof Array); //true


// js o tipo pode ser mudado simples.
//simplesmente alunos não é mais um object to tipo array
alunos = 123;

console.log(typeof alunos); //number
console.log(alunos instanceof Array); //false

