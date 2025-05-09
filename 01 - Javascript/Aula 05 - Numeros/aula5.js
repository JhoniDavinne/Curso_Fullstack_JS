//IEEE 754-2008


// falando sobre numeros

let num1 = 1500; //number
let num2 = 2.5; //number
let num3 = 10.5789551255547; //number

//forçar concatenação
console.log(num1.toString() + num2);

//virando binario
console.log(num1.toString(2));

//diminuindo casas decimais
console.log(num3.toFixed(2)); // cuidado ele arredonda

// verificanr se o numero é inteiro
console.log(Number.isInteger(num3)); //false
console.log(Number.isInteger(num1)); //true

//verificar se o numero é NaN
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); //true

// caracteristicas de numeros decimais no JS
let num4 = 0.7;
let num5 = 0.1;
console.log(num4 + num5); //0.7999999999999999

num4 += num5; //0.8
num4 += num5; //0.9
num4 += num5; //1.0 nao cheraga nesse valor correto.
let temp2 = num4;

console.log(num4);// nao esta nem arredondado, nem inteiro, imprecisao js com numero decimas.


// arredondar e deixar como interio.
num4 = num4.toFixed(2); // visualemnte como inteiro porem nao passa no verificar se é inteiro

console.log(num4, Number.isInteger(num4)); //false

// resolver o problema de arredondamento, o jeito correto seria fazer o seguinte:
temp2 = Number(temp2.toFixed(2));

console.log(temp2, Number.isInteger(temp2)); //true




//FORMA COMPLEXA POREM COM RESULTADO CORRETO DE ARREDONDAMENTO

let num6 = 0.7;
let num7 = 0.1;

num6 = (num6 * 100 + num7 * 100) / 100; //0.8
num6 = (num6 * 100 + num7 * 100) / 100; //0.9
num6 = (num6 * 100 + num7 * 100) / 100; //1.0

console.log(num6, Number.isInteger(num6)); //true