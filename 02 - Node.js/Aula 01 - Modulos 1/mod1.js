
const nome = 'Joaquim';
const sobrenome = 'Silva';


const falarNome = () => `Ola, ${nome} ${sobrenome}!`;





// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falarNome = falarNome;
// console.log(module.exports);
// console.log(module);

/* No Node.js, module.exports e exports apontam para o mesmo objeto
   Então, não precisa usar module.exports, pode usar exports mais simplificado.
*/


exports.NOME = nome;
exports.sobrenome = sobrenome;
exports.falarNome = falarNome;
this.qualquerCoisa = 'Qualquer coisa'; // aponta para module.exports tbm, outro jeito de exportar.

/* Entao existe 3 jeitos, porem o mais comum e o exports*/


console.log(module.exports);
console.log(module);
