// IIFE  -> Immediately Invoked Function Expression
const nome = 'luiz';


(() => {
    console.log('sou um IIFE')
    const nome = 'Jhoni';
    console.log(nome);
})();





(function (idade, peso, altura) {
    console.log('sou um IIFE')
    console.log(idade, peso, altura)
})(27, 80, 1.83);