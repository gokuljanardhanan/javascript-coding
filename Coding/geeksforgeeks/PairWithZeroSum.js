function getPairs(arr) {
  let output = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr.indexOf(arr[i], i + 1) !== -1) {
        output.add([0, 0]);
      }
    } else {
      if (arr.indexOf(-1 * arr[i], i + 1) !== -1) {
        output.add([arr[i], -1 * arr[i]]);
      }
    }
  }
  console.log(output);
  return output;
}

getPairs([6, 1, 8, 0, 4, -9, -1, -10, -6, -5]);
