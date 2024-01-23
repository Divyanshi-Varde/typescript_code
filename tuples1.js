"use strict";
let person3 = ["Divyanshi", 21, false];
const displayInfo = (person) => {
    const [name, age, hasDrivingLicence] = person;
    return `Name: ${name}\n Age: ${age}\n Driving License: ${hasDrivingLicence}`;
};
console.log(displayInfo(person3));
