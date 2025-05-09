class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ja esta ligado`)
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} ja esta desligado`)
            return
        }
        this.ligado = false
    }
}


// const d1 = new DispositivoEletronico('Celular');
// d1.ligar();
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);


class Celular extends DispositivoEletronico { }

const c1 = new Celular('Xiaomi');
c1.ligar();
console.log(c1); // perceba que herdou tudo de DispositivoEletronico




class Smartphone extends DispositivoEletronico { 
    constructor(nome, cor, modelo) { 
        super(nome); // chamando o construtor da classe pai, para nome, semelhante a Call

        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S24');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome); // chamando o construtor da classe pai, para nome, semelhante a Call 
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, vocë alterou o método ligar');
    }

    falaOi() {
        console.log('Oi');
    }

}

const t1 = new Tablet('Ipad', true);
t1.ligar();// diferente da classe pai
t1.falaOi();// exclusivo da classe Tablet
