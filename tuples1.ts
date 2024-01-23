type PersonInfo1 = readonly [string, number, boolean];
let person3: PersonInfo1 = ["Divyanshi", 21, false];
const displayInfo = (person: PersonInfo1) => {
  const [name, age, hasDrivingLicence] = person;
  return `Name: ${name}\n Age: ${age}\n Driving License: ${hasDrivingLicence}`;
};
console.log(displayInfo(person3));
