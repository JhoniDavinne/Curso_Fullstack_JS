const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'test.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    { nome: 'Joaquim', sobrenome: 'Silva' },
    { nome: 'Maria', sobrenome: 'Silva' },
    { nome: 'Pedro', sobrenome: 'Silva' },
];

const json = JSON.stringify(pessoas, '', 2);


escrever(caminhoArquivo, json);


// async function leArquivo(caminho) {
//     const dados = await ler(caminho);
//     renderizaDados(dados);
// }

// leArquivo(caminhoArquivo);


ler(caminhoArquivo).then((dados) => renderizaDados(dados));

function renderizaDados(dados) { 
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val.nome));
}


