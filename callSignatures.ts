type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
};

const student1 = {
  name: "Heer",
  age: 18,
  gender: "female",
  greet: (country: string) => {
    return `Welcome everyone! My name is ${student1.name} and I live in ${country} `;
  },
};

const student2 = {
  name: "Hetvi",
  age: 18,
  gender: "female",
  greet: (country: string) => {
    return `Welcome everyone! My name is ${student2.name} and I live in ${country} `;
  },
};

console.log(student1.greet("India"));
console.log(student2.greet("France"));
