
const produto = { nome: 'Camiseta', preco: 20 };
const outraCoisa = produto; //como ja sabemos apontando para o mesmo local na memoria, referencia
outraCoisa.preco = 40;
produto.nome = 'Caneca';
//copia usando spread como ja sabemos
const outraCoisa2 = { ...produto };// nao copia os metodos, e nao aponta para o mesmo local, na é mais referencia.
outraCoisa2.nome = 'Bone';

//usando metodos de objetos
const outraCoisa3 = Object.assign({}, produto);
outraCoisa3.nome = 'Chapeu';

console.log('produto: ',produto);
console.log('outraCoisa: ',outraCoisa);
console.log('outraCoisa2: ',outraCoisa2);
console.log('outraCoisa3: ',outraCoisa3);

const outraCoisa4 = Object.assign({}, produto, {material : 'couro'});
console.log('outraCoisa4: ',outraCoisa4);

// ver a propriedade de um chave do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


//retornar so os valores 
console.log(Object.values(produto));

//array de cada chave do objeto
console.log(Object.entries(produto));


//destructuring com entries

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}