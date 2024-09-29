const arr = [1, 2, 3, 4];

// const out = arr.reduce((acc, cur)=>{return acc+cur},0);

Array.prototype.customReduce = function (callback, initVal) {
  let output = initVal;
  for (let i = 0; i < this.length; i++) {
    output = callback(output, this[i]);
  }
  return output;
};
const out = arr.customReduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(out);
