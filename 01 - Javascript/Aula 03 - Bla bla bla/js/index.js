// console.log(Number(prompt('numero 1')) + Number(prompt('numero 2')));

// inverta, de forma que fique respectivo ao comeentario
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let auxTemp = varA;
varA = varB;
varB = varC;
varC = auxTemp;

console.log(varA, varB, varC);

// outra maneira de fazer

varA = 'A'; //B
varB = 'B'; //C
varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);