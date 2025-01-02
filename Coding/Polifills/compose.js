function compose(...functions) {
  return (args) => functions.reduceRight((acc, fn) => fn(acc), args);
}

// Example Usage:
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const composed = compose(add, multiply);
console.log(composed(5)); // Output: 11 (5 * 2 + 1)
