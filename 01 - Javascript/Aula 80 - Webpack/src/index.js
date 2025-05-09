import { nome2, idade, soma, Pessoa as Outracoisa } from './modulo1.js'; // exemplo de importação
import * as modulo2 from './modulo2.js'; //exemplo de importação de todo o modulo
import qualquerNome from './modulo3.js'; //exemplo de importação do padrão de um modulo.
import sobrenomeDefault from './modulo1.js';
import multiplicar, {curso} from './modulo4.js';


const nome = 'Jhoni';


console.log(nome);
console.log(nome2);
console.log(sobrenomeDefault);
console.log(idade);
console.log(soma(5, 0));

console.log('Hello World!');

const p1 = new Outracoisa('Jhoni', 'Silva');
console.log(p1);


console.log(modulo2.subtrair(5, 2));

console.log(qualquerNome(5, 2)); 


console.log(multiplicar(5, 2), curso);