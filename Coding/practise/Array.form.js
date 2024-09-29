function example() {
  const argsArray = Array.from(arguments);
  console.log(argsArray); // Output: [1, 2, 3]
}

example(1, 2, 3);

const nodeList = document.querySelectorAll("div");
const nodeArray = Array.from(nodeList);
console.log(nodeArray); // Output: Array of div elements

const mySet1 = new Set([1, 2, 3]);
const myArray = Array.from(mySet1);
console.log(myArray); // Output: [1, 2, 3]

const str = "hello";
const strArray = Array.from(str);
console.log(strArray); // Output: ['h', 'e', 'l', 'l', 'o']

const doubled = Array.from([1, 2, 3], (x) => x * 2);
console.log(doubled); // Output: [2, 4, 6]

const mySet2 = new Set([1, 2, 3]);
const transformedArray = Array.from(mySet2, (x) => x + 1);
console.log(transformedArray); // Output: [2, 3, 4]

const sequentialNumbers = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(sequentialNumbers); // Output: [1, 2, 3, 4, 5]

const originalArray = [1, 2, 3];
const copiedArray = Array.from(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]

const sparseArray = [1, , 3];
const fullArray = Array.from(sparseArray);
console.log(fullArray); // Output: [1, undefined, 3]
