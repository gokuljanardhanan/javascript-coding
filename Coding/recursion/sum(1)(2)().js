const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)()); // 3
console.log(sum(3)(7)(2)(1)()); // 13
