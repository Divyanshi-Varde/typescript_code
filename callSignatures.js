"use strict";
const student1 = {
    name: "Heer",
    age: 18,
    gender: "female",
    greet: (country) => {
        return `Welcome everyone! My name is ${student1.name} and I live in ${country} `;
    },
};
const student2 = {
    name: "Hetvi",
    age: 18,
    gender: "female",
    greet: (country) => {
        return `Welcome everyone! My name is ${student2.name} and I live in ${country} `;
    },
};
console.log(student1.greet("India"));
console.log(student2.greet("France"));
