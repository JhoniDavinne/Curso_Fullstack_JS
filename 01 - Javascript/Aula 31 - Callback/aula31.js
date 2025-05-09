function random(min = 1000, max = 3000) {
    return Math.floor(Math.random() * (max - min) + min);
}
function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if(callback) callback();
    }, random());
   
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if(callback) callback();
    }, random());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if(callback) callback();
    }, random());
}

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Ola, mundo!');
//         });
//     })
// });



f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}   
function f2Callback() { 
    f3(f3Callback); 
}
function f3Callback() {
    console.log('Ola, mundo!');
}
