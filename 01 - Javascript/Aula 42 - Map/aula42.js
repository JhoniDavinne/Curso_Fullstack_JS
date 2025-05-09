//Map -> sempre vai retornar, com a mesma quantidade de elementos.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Dobre os numeros
const dobro = numeros.map(valor => valor * 2)
console.log('dobro: ',dobro)


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
//Retorne apenas uma string com o nome da pessoa
const nomoObjeto = pessoas.map((obj) => obj.nome);
console.log('nomoObjeto: ',nomoObjeto, pessoas);

//Remova apenas a chave "nome" mdo objeto
const removeNome = pessoas.map((obj) => {
    const newObj = {...obj}
    delete newObj.nome;
    return newObj;
});
console.log('removeNome: ',removeNome);
//ou 
const removeNome2 = pessoas.map((obj) => ({idade : obj.idade}));

console.log('removeNome2: ', removeNome2);

// //Adiciona uma chave de id em cada objeto

const idObjeto = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice;
    return newObj;
})
console.log('idObjeto: ', idObjeto)