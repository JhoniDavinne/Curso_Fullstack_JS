// const fs = require('fs');
// const path = require('path');

// const caminhoArquivo = path.resolve(__dirname, '..', 'test.txt');

/** Escreve no arquivo fs sem promises, precisa de um callback*/

// fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' }, (err) => {
//     if (err) {
//         console.error('Erro ao escrever no arquivo:', err);
//     } else {
//         console.log('Arquivo escrito com sucesso!');
//     }
// });


/** Escreve no arquivo fs com promises, não precisa de um callback*/

// const fss = require('fs').promises;
// fss.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a' });

/** 
 * flag: 'w' - sobrescreve o arquivo
 * flag: 'a' - adiciona no final do arquivo
 * 
*/


// const caminhoArquivo2 = path.resolve(__dirname, '..', 'test.json');

// const pessoas = [
//     { nome: 'Joaquim', sobrenome: 'Silva' },
//     { nome: 'Maria', sobrenome: 'Silva' },
//     { nome: 'Pedro', sobrenome: 'Silva' },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// fss.writeFile(caminhoArquivo2, json, { flag: 'w' });



const fs = require('fs').promises;

module.exports = (caminho, dados) => { 
    fs.writeFile(caminho, dados, { flag: 'w' });
}