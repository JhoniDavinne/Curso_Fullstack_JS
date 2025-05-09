// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let num = random(1, 10);    
while (num !== 10 && num !== 7) {
    num = random(1, 10);
    console.log(num);
}

console.log('########################');



do {
    num = random(1, 10);
    console.log(num);
} while (num !== 10 && num !== 7)