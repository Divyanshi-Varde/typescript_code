console.log("Divyanshi");
//@ts-ignore
let num = 5;
num = 33;
//@ts-ignore
function add(a: number, b: number): number {
  return a + b;
}

//console.log(add(2, "Divyanshi")); // this should throw an error....
console.log(add(3, 4));

let value: number = NaN;
console.log(value);
