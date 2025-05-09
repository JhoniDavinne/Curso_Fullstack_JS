/**
 * Falando mais sobre strings
 * 
 */

// forma escrever um string com aspas duplas com aspas duplas dentro, FORMA INFORMAL DE FAZER, NAO RECOMENDADO

let umaString = "Um \"texto\"";
console.log(umaString);


/** 
 * STRING SÃO INTERATIVAS, EXEMPLO:
 * 
 */
//             01234567
let string1 = "Um texto";

console.log(string1[4]); // mostra o caractere na posicao 4 -> 'e'
console.log(string1.charAt(4)); // mostra o caractere na posicao 4 -> 'e'
console.log(string1.length); // mostra o tamanho da string, 8 posicões

console.log(string1.indexOf("texto")); // mostra a primeiro posicao da palavra 'texto'

// comecando de tras para frente
console.log(string1.lastIndexOf("t")); // mostra a ultima posicao da letra 't' observer que ela se repete


/** 
 * 
 * expressao regular
 */

let string2 = "Um texto";
console.log(string2.match(/[a-z]/g)); // mostra todas as letras do alfabeto minusculas contida na string.

console.log(string1.replace("Um", "Outro")); // troca o texto dentro da string.

string2 = "O Rato roeu a roupa do rei de Roma.";
console.log(string2.split(" ")); // divide a string em palavras.
console.log(string2.split(" ", 3)); // divide a string em palavras, retornondo apenas as 3 primeiras.
console.log(string2.toUpperCase()); // deixa tudo maiusculo
console.log(string2.toLowerCase()); // deixa tudo minusculo
console.log(string2.replace(/[aeiou]/gi, "*")); // substitui todas as vogais por *
console.log(string2.replace(/[r]/g, "#")); // substitui todas os caracteres 'r' por '#'
console.log(string2.slice(2, 6)); // mostra o texto entre as posicoes 2 e 6. cortara o texto, retornando rato

//mesma coisa
// slice(-5) é o mesmo que slice(30) pois, oque acontece por tras dos panos é (string2.length - 5) = 30
console.log(string2.slice(-5)) 
console.log(string2.slice(30))  
console.log(string2.slice(-5, -1)) // == string2.slice(30, 34)
