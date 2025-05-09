const comModelo = false;
const numeroAula = '08';
const temaAula = 'Express - req.params, req.query e req.body'; 

const fs = require('fs');
const path = require('path');

// Define o nome da nova pasta e do arquivo
const folderName = `Aula ${numeroAula} - ${temaAula}`;
const fileName = `aula${numeroAula}.js`;

// Caminho para a nova pasta e para a pasta "modelo"
const folderPath = path.join(__dirname, folderName);
const modeloPath = path.join(__dirname, 'modelo - Webpack');


// Função para copiar arquivos
function copyFiles(src, dest) {
    // Verifica se o diretório de destino existe, caso contrário, cria-o
    fs.mkdir(dest, { recursive: true }, (err) => {
        if (err) throw err;

        // Lê os arquivos/diretórios da origem
        fs.readdir(src, (err, files) => {
            if (err) throw err;

            files.forEach((file) => {
                const srcPath = path.join(src, file);
                const destPath = path.join(dest, file);

                // Verifica se é diretório ou arquivo
                fs.stat(srcPath, (err, stats) => {
                    if (err) throw err;

                    if (stats.isDirectory()) {
                        // Recursivamente copia subdiretórios
                        copyFiles(srcPath, destPath);
                    } else {
                        // Copia arquivos
                        fs.copyFile(srcPath, destPath, (err) => {
                            if (err) throw err;
                        });
                    }
                });
            });
        });
    });
}


if (comModelo) {
    // Verifica se a pasta "modelo" existe
    fs.access(modeloPath, (err) => {
        if (err) {
            return console.error('A pasta "modelo" não existe:', err);
        }

        // Copia a pasta "modelo" para o novo diretório
        copyFiles(modeloPath, folderPath);

        console.log(`Cópia da pasta "modelo" criado com sucesso dentro da pasta ${folderName}!`);
    });
} else {
    // Caso comModelo seja falso, cria uma nova pasta e o arquivo como no código original
    fs.access(folderPath, (err) => {
        if (!err) {
            console.log('A pasta já existe. Nenhuma ação necessária.');
            return;
        }

        // Cria a nova pasta
        fs.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                return console.error('Erro ao criar a pasta:', err);
            }

            // Cria o novo arquivo dentro da nova pasta
            const filePath = path.join(folderPath, fileName);
            fs.writeFile(filePath, '', (err) => {
                if (err) {
                    return console.error('Erro ao criar o arquivo:', err);
                }
                console.log('Pasta e arquivo criados com sucesso!');
            });
        });
    });
}
