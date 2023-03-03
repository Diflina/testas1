console.log('Pirma uzduotuotis');

let a = 6, 
    b = 12; 

console.log(a >= b);
console.log(a == b);

console.log('Antra uzduotis');

for(i=1;i<=10;i++) { console.log(i); }

console.log('Trecia uzduotis');

console.log('Ketvirta uzduotis');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const arr = [];

for (let i = 0; i <10; i++) {
    arr.push(getRandomIntInclusive(1,10));
}

const arr2 = [...Array(5)].map(_ => Math.floor(Math.random() * 10 + 1));

let c = '1';

c = +c;

console.log(c + 1);

console.log(arr2);

console.log('Penkta uzduotis');

let random_number = 0;

do {
    random_number = Math.floor(Math.random() * 10);
    console.log(random_number);
} while (random_number != 5)

console.log('Sesta uzduotis');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


const arr3 = [];

for (let i = 0; i <10; i++) {
    arr.push(getRandomIntInclusive(1,10));
}

const arr4 = [...Array(30)].map(_ => Math.floor(Math.random() * 30 + 10));

let d = '1';

d = +d;

console.log(c + 1);

console.log(arr4);


