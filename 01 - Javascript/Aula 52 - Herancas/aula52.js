//OLHE O LOG DO NAVEGADOR

//Produto -> aumento, desconto
// Camiseta, caneca, lapis

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); //Camiseta herda todos os atributos de Produto
    this.cor = cor; //atributo que somente a Camiseta tem
}
Camiseta.prototype = Object.create(Produto.prototype) //Camiseta herda os prototipos de Produto
Camiseta.prototype.constructor = Camiseta; //Camiseta agr é o construtor de Camiseta

Camiseta.prototype.aumento = function (percentual) { // Camiseta tem seu proprio aumento diferente de Produto
    this.preco = this.preco + (this.preco * (percentual / 100));
}


const produto = new Produto('Generico', 1.99)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(10);// aumentara 10% inves de +10 no valor, metodo diferente do aumento de Produto

console.log(produto)
console.log(camiseta)



function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:false,
        get: function () {
            return estoque;
        },
        set: function () {
            if (typeof valor !== 'number ') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Stanley', 20, 'Porcelana', 5);
caneca.estoque = 100;
console.log(caneca)