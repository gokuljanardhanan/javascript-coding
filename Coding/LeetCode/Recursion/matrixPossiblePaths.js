function possiblePaths(n, m) {
  if (m == 1 || n === 1) return 1;
  return possiblePaths(n, m - 1) + possiblePaths(n - 1, m);
}

console.log(possiblePaths(1, 1)); //1
console.log(possiblePaths(3, 3)); //6
console.log(possiblePaths(3, 2)); //3

/*
Write a function that takes 2inputs m and n, and outputs the number of unique paths 
from top left corner to bottom right corner of an n*m grid

constraints: You can only move right or down 1unit at a time
*/
