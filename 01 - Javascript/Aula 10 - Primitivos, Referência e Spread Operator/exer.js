//IIFE

(function () {
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');
    let nome = form.querySelector('.nome');
    let sobrenome = form.querySelector('.sobrenome');
    let peso = form.querySelector('.peso');
    let altura = form.querySelector('.altura');
    let pessoas = [];
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    })
}())
    