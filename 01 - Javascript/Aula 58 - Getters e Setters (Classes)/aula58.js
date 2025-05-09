class Carro {
     constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
     }
    
    acelerar() { 
        if (this.velocidade >= 100) return;
        this.velocidade++;
    }

    freiar() {
        if (this.velocidade <= 0) return;
        this.velocidade--;
    }

}

const fusca = new Carro('Fusca');
for (let i = 0; i <= 200; i++) {
    fusca.acelerar();
}

console.log(fusca);
fusca.velocidade = 9999;
console.log(fusca); // foi setado forçadamente a velocidade e não pode, quero que um setter controle isso, e ele pode alterar a velocidade.
//Supomos que eu queira ter um limite de velocidade, ou seja, eu quero que o carro seja capaz de acelerar e parar de acelerar.
//pois seria possivel alguem, erroneamente setar fuscar.velocidade = 9999;
//para isso usamos getters e setters.


//Symbol é um identificador exclusivo para um valor, gera um id aleatorio.
// ou seja (Symbol() === Symbol()) = false
//const _velocidade = Symbol('velocidade'); // pode declarar dos 2 jeitos, com descritor ou sem.
const _velocidade = Symbol();
class Carro2 {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(novaVelocidade) {
        console.log('setter');
        if (typeof novaVelocidade !== 'number' || novaVelocidade >= 100 || novaVelocidade <= 0) return;
        this[_velocidade] = novaVelocidade;
    }
    get velocidade() {
        console.log('getter');
        return this[_velocidade];
    }
    acelerar() { 
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const fusca2 = new Carro2('Fusca');
fusca2.velocidade = 9999;
console.log(fusca2.velocidade); // observe que o valor 9999, não foi setado.

fusca2.velocidade = -1;
console.log(fusca2.velocidade); // observe que o valor -1, não foi setado. 

fusca2.velocidade = 50;
console.log(fusca2.velocidade); // observe que o valor 50 foi setado.



//============================================================================================================================================

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    nomeCompleto2() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();//Tranforma a string em array, Remove o primeiro item do array e o Retorna: //Jhoni
        this.sobrenome = valor.join(' '); //valor agora é um array sem o primeiro item, ['Davinne', 'Morales'], transforma em string  unidos por '' o e retorna: //Davinne Morales
    }
}

const p1 = new Pessoa('Luiz', 'Ota');
console.log(p1.nomeCompleto); // getter
console.log(p1.nomeCompleto2()); //function

p1.nomeCompleto = 'Jhoni Davinne Morales';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);