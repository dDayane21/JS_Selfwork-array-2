let numeri = [3, 5, 10, 2, 8];

let somma = numeri.reduce((acc, num)=> acc + num);
console.log(somma);

let media = somma / numeri.length;
console.log(media);

let ValoriMinoriMedia = numeri.filter((num)=> num < media);
console.log(ValoriMinoriMedia);

let ValoriMaggioriMedia = numeri.filter((num)=> num > media);

console.log(ValoriMinoriMedia.length);

console.log(ValoriMaggioriMedia.length);