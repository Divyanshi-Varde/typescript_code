// const isPalindrome = (str: string): boolean => {
//   let result = str.split("").reverse().join("");
//   return result === str;
// };

// console.log(isPalindrome("12321"));

const calculateAverage = (numbers: number[]): number => {
  let sum = numbers.reduce((num, currentValue) => {
    return num + currentValue;
  });
  let average = sum / numbers.length;
  return average;
};

console.log(calculateAverage([2, 3, 4, 5, 6, 7]));

const findMaxValue = (numbers: number[]) => {
  let array1 = numbers.sort((a, b) => b - a);
  let result = array1.slice(0, 1);
  return result;
};

console.log(findMaxValue([9, 54, 33, 56, 11, 88, 99]));
