//defineProperty -> Getter e Setters


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        //value: estoque, //valor // nao precisa do value, pois o getter é quem vai resolver isso
        //writable:true, //pode alterar // nao precisa do writable, pois o setter é quem vai resolver isso
        configurable: true,//configuravel

        get: function () {
            return estoque;
        },
        set: function (valor) { 
            if (typeof valor !== 'number') {
                console.log('Invalido');
                //throw new TypeError('Invalido');
                return;
            }
            estoque = valor;
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

// p1.estoque = 'heuqwe'// seria errado pois deveria so aceitar numero, acima os getters e setter vamo resolver isso

console.log(p1); //Produto { nome: 'Camiseta', preco: 20, estoque: [Getter] }
//nao da mais para ver o estoque so chamando o objeto, e preciso chamar a propriedade:
console.log(p1.estoque); //3

p1.estoque = "awasdasdasd";// retorna invalido, nao ira modificar, pois o valor nao é numero
console.log(p1.estoque);//3

p1.estoque = 55;
console.log(p1.estoque);//55



function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor + ' 2024';
        }
    }
}

const p2 =  new criaProduto('Camiseta'); //aqui ele cria um objeto, e nao usa o setter nem o getter.
console.log(p2); //{ nome: [Getter/Setter] }
console.log(p2.nome);//Camiseta
p2.nome = 'Caneca';
console.log(p2.nome); //{ nome: 'Caneca 2024' } o nome recebeu o 2024, pois foi sobrescrito pelo setter.

