const arr = [1, 2, 3, 4];

// const out = arr.filter((item)=>{return item>2});

Array.prototype.customFilter = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

const out = arr.customFilter((item) => {
  return item > 2;
});

console.log(out);
