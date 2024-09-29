// Question 1
// const input =  [3,30,34,5,9];
// const input =  [10,2];
const input = [10, 2, 4, 55, 56];

const comparatorFn = (a, b) => {
  const combination1 = a.toString() + b.toString();
  const combination2 = b.toString() + a.toString();
  return combination2 - combination1;
};

let out = input.sort(comparatorFn);
out = out.join("");
console.log(out);
