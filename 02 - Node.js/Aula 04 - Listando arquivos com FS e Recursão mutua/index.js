const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    //É .git ou node_modules, vai para o proximo file.
    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    //É diretorio recursiva para olhar os arquivos dentro.
    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    //Se nao for html, vai para o proximo file.
    if (!/\.html$/g.test(fileFullPath))continue;

    //Vai imprimir todos os arquivos html
    console.log(fileFullPath);
  }
}

readdir('c:/Users/RYZEN/Documents/Workspace/FORMACAO_DEV/Udemy Web/CursoJS');