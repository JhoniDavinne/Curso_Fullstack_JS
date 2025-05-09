

try {
    console.log(naoExisto);
} catch (err) {
    console.log('naoExisto não existe');
    console.log(err);
}


function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new ReferenceError('Os valores devem ser numéricos');
    }
    return a + b;
}


try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch (err) {
    console.log(err);
}
