function sum(a) {
  return (b) => {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

console.log(sum(1)()); //1
console.log(sum(2)(1)()); //3
console;
log(sum(3)(2)(1)()); //6

/*
Base case : no second parameter : sum(1)() -> 1
Examples : 
    sum(1)() -> 1  : 1
    sum(2)(1)() -> 2 + sum(1)()  : 3
    sum(3)(2)(1)() -> 3 + sum(2)(1)() : 6
    sum(4)(3)(2)(1)() -> 4 + sum(3)(2)(1)() : 10
Pattern -> 
    sum(a)(b)()  -> a + sum(b)()

Code :
    if b is not present -> return a
    else return a + sum(b)

*/
