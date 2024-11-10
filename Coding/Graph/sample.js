const sum = (n) => {
  if (n === 0) {
    return 0;
  }

  return n + sum(n - 1);
};

console.log(sum(8)); // 6
console.log(sum(9)); // 10
