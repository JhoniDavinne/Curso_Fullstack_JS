const fizzbuzz = (n) => {
    if (typeof n !== 'number') return `Não é um número`;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;

}

for (let i = 0; i < 20; i++) {
    console.log(fizzbuzz(i));
}
