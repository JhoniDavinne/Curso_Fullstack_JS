const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Ota';
    console.log(nome);// Ota, dentro do escopo usaFalaNome();
    falaNome(); // Luiz, porque ira imprimir 'Luiz'? 
    // observe que a funcao falaNome() e lembre-se que ela ira procurar dentro dela, 
    // não achou, entao ela ira procurar fora dela no escopo global, onde ela encontra: const nome = 'Luiz';.
}

usaFalaNome()