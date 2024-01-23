"use strict";
// const a = [1, 2, 3, 4, 4];
// const b = "Hello World!";
// const c = { name: "Divyanshi" };
// const d = [true, false, true];
// const e = 42;
// let res1 = Array.isArray(a);
// let res2 = Array.isArray(b);
// let res3 = Array.isArray(c);
// let res4 = Array.isArray(d);
// let res5 = Array.isArray(e);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
const fruits = ["apple", "banana", "kiwi"];
const updatedFruits = fruits.push("grapes");
console.log(updatedFruits); //gives length...
console.log(fruits);
const lastData = fruits.pop();
console.log(lastData);
const num2 = [1, 2, 3, 4, 5];
const anotherNum = num2.map((item) => {
    return item.toString();
});
console.log(anotherNum);
const updatedNum = num2.map((item) => {
    return item * 2;
});
console.log(updatedNum);
const filteredNum = updatedNum.filter((curElm) => curElm > 5);
console.log(filteredNum);
//1..........
const squareofNum = num2.map((curElm) => {
    return curElm * curElm;
});
console.log(squareofNum);
//2...............
const names = ["parth", "divyanshi", "hetvi", "meet", "mahi"];
const updatedNames = names.map((curElm) => {
    return curElm.toUpperCase();
});
console.log(updatedNames);
//3..............
const str3 = ["hello", "hi", "hola", "aloha"];
const newStr = str3.filter((curElm) => {
    return curElm.length < 3;
});
console.log(newStr);
//4.................
const names2 = ["Aniruddh", "Archie", "Dinky", "Roma"];
const filteredNames2 = names2.filter((item) => {
    return item.startsWith("A");
});
console.log(filteredNames2);
