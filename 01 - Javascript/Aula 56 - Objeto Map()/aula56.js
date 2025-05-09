const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'João' },
];

// transformar de modo que fique, nessa ordem, atribua chaves, com o mesmo valor de id: 

// {
//     3: { id: 1, nome: 'Luiz' },
//     2: { id: 2, nome: 'Maria' },
//     1: { id: 3, nome: 'João' },
// };
//TENTANDO
const novasPessoas = {};
for (const pessoa of pessoas) { 
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}
console.log(novasPessoas);

//O RESULTADO NAO É O ESPERADO POIS A ORDEM DE ORIGEM DEVE SER A MESMA.
//MAS ISSO NAO ACONTECE E O RESULTADO SAI:
// OBSERVE A ORDEM, CLARO ISSO NAO É UM PROBBLEMA, MAS QUEREMOS NA ORDEM EXATA. 3, 2, 1 a chve sendo number
// {
//     '1': { id: 1, nome: 'João' },
//     '2': { id: 2, nome: 'Maria' },
//     '3': { id: 3, nome: 'Luiz' },
// };


//USANDO MAP
const novasPessoas2 = new Map();
pessoas.forEach((pessoa) => {
    novasPessoas2.set(pessoa.id, { ...pessoa });
});
console.log(novasPessoas2);

//O RESULTADO É O ESPERADO POREM SO MUDA O JEITO DE CONSUTAR , POIS É UM OBJETO DO TIPO MAP
//MANTEVE A ORDEM E TBM AS CHAVES SAO NUMBER
// Map(3) {
//     3 => { id: 3, nome: 'Luiz' },
//     2 => { id: 2, nome: 'Maria' },
//     1 => { id: 1, nome: 'João' },
// };

console.log(novasPessoas2.get(3)); //{ id: 3, nome: 'Luiz' },
console.log(novasPessoas2.get(4)); //undefined


// BRINCADO SO PARA INTERAR...
for (const [identifier, { id, nome }] of novasPessoas2) { // brincando com destructuring
    console.log(identifier, id, nome);
}


// BRINCADO SO PARA INTERAR...
for (const chaves of novasPessoas2.keys()) { // brincando com destructuring
    console.log(chaves);
}

// BRINCADO SO PARA INTERAR...
for (const pessoas of novasPessoas2.values()) { // brincando com destructuring
    console.log(pessoas);
}


novasPessoas2.delete(2);// Removendo Maria
console.log(novasPessoas2.values());