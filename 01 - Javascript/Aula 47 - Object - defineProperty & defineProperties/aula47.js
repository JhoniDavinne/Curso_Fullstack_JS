//defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave ? sim 
        value: estoque, // valor
        configurable: false, // pode apagar a chave ou reconfigurar a chave ? nao
        writable: false, // pode alterar o valor ? nao
        // get: function () {
        //     return estoque;
        // },
        // set: function (valor) {
        //     if (typeof valor !== 'number') {
        //         console.log('Invalido');
        //         return;
        //     }
        //     estoque = valor;
        // }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
//=========================================================================================================
function Produto2(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostrar a chave ? nao 
        value: estoque, // valor
        configurable: false, // pode apagar a chave ou reconfigurar a chave ? nao
        writable: false, // pode alterar o valor ? nao
        
    })
}

const p2 = new Produto2('Camiseta', 20, 3);
console.log(Object.keys(p2)); //OBSERVER que por estoque estar enumerable: false, a chave nao aparece
console.log(p2.estoque);


//========================================================================================================

function Produto3(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave ? sim 
        value: estoque, // valor
        configurable: true, // pode apagar a chave ou reconfigurar a chave ? sim
        writable: true, // pode alterar o valor ? sim
        
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostrar a chave ? sim 
            value: nome, // valor
            configurable: true, // pode apagar a chave ou reconfigurar a chave ? sim
            writable: true, // pode alterar o valor ? sim
        },
        preco: {
            enumerable: true, // mostrar a chave ? sim 
            value: preco, // valor
            configurable: true, // pode apagar a chave ou reconfigurar a chave ? sim
            writable: true, // pode alterar o valor ? sim
        }
    })
}

const p3 = new Produto3('Camiseta', 20, 3);