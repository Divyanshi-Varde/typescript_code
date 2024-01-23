"use strict";
//@ts-ignore
// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber);
let bigNumber = 9007199254740991n;
console.log(bigNumber);
let anotherBigNumber = BigInt("9007199254740991");
console.log(anotherBigNumber);
let differece = bigNumber - anotherBigNumber;
let product1 = bigNumber * anotherBigNumber;
let division = bigNumber / anotherBigNumber;
console.log(differece);
console.log(product1);
console.log(division);
