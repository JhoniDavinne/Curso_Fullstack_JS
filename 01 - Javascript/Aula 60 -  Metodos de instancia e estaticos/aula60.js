class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    //Metodos de instancia
    diminuirVolume(){   
        this.volume -= 2;
    }
    //Metodos de estaticos
    static trocaPilha(){
        console.log('Pilha trocada');
    }
}

const c1 = new ControleRemoto('LG');// Instancia
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);

//c1.trocaPilha(); // gera erro, pois é não é um metodo de instacia, e sim da classe.

ControleRemoto.trocaPilha();// agora sim fuciona