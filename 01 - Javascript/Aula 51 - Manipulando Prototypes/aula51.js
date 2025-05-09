//OLHE O LOG DO NAVEGADOR

// new Object -> Oject.prototype

const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    //__proto__: objA
}


const objC = new Object
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);//Setter
Object.setPrototypeOf(objC, objB);//Setter

console.log(objB.chaveA);
console.dir(objB)
console.dir(objC)
console.dir(Object.getPrototypeOf(objC))//Getter

//===================================================================================================

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){ 
    this.preco = this.preco + (this.preco * (percentual / 100));
}


const p1 = new Produto('Camiseta', 50);
p1.desconto(50)
console.log(p1)

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype) // observer que no console do navegador, p2 tem o prototipo de Produto  (metodos herdados) e apresentado como Produto
p2.aumento(100)
console.log(p2)

const p3 = Object.create(Produto.prototype, { // observer que no console do navegador, p3 tem o prototipo de Produto (metodos herdados) e apresentado como Produto
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }
})

p3.aumento(100)
console.log(p3)
