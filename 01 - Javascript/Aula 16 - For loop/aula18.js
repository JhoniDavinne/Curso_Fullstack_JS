for (let i = 0; i <= 10; i++) { 
    const par =i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['maca', 'pera', 'banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i} = ${frutas[i]}`);
}