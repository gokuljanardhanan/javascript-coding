//Time complexity: O(n)
//Space complexity: O(1)
var singleNumberOptimized = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

//Time complexity: O(n)
//Space complexity: O(n)
var singleNumber = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return -1;
};

console.log(singleNumber([1]));
