/* 
Making a copy of a function and create more methods out of it by presetting some arguments
*/
// Case 1: With the help of bind method
const multiply = (a, b) => a * b;

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5)); // 10

const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5)); // 15

// Case 2: With the help of closure

const multiplyFn = (a) => (b) => {
  return a * b;
};

const multiplyByTwoFn = multiplyFn(2);
console.log(multiplyByTwoFn(5)); // 10

const multiplyByThreeFn = multiplyFn(3);
console.log(multiplyByThreeFn(5)); // 15
