function* geradora1() {
    //Código qualquer...
    yield 'Valor 1';
    //Código qualquer...
    yield 'Valor 2';
    //Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
//usasse .next(), para ir pegando os proximos valores, 'done:false' diz que ainda não acabou e quem ainda restam outros valores, se tivesse acabou seria 'done:true'
// console.log(g1.next()) //{ value: 'Valor 1', done: false }
console.log(g1.next().value) //Valor 1
console.log(g1.next().value) //Valor 2
console.log(g1.next().value) //Valor 3
console.log(g1.next().value) //undefined, pois acabou nao tem mais valores. yield

//INFINITO
function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value) //0
console.log(g2.next().value) //1
console.log(g2.next().value) //2
console.log(g2.next().value) //3
console.log(g2.next().value) //4



function* geradora3() {
    yield 0;
    yield 1;
    yield 2;

}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora2();
console.log(g4.next().value) //0 valor delegado da geradora3()
console.log(g4.next().value) //1 valor delegado da geradora3()
console.log(g4.next().value) //2 valor delegado da geradora3()
console.log(g4.next().value) //3
console.log(g4.next().value) //4
console.log(g4.next().value) //5