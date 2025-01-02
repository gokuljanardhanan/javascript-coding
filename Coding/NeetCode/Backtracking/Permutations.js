// Time complexity : O(n^2 * n!) : There are n! permutations and it requires O(n) time to print a permutation.
// Space complexity : O(n!)
var permute = function (nums) {
  let perms = [[]];

  for (let i = 0; i < nums.length; i++) {
    let nextPerms = [];
    for (let j = 0; j < perms.length; j++) {
      for (let k = 0; k < perms[j].length + 1; k++) {
        const element = [...perms[j]];
        element.splice(k, 0, nums[i]);
        nextPerms.push(element);
      }
    }
    perms = nextPerms;
  }
  return perms;
};

// Test cases

const permutationRecursive = (nums) => {
  return helper(0, nums);
};

const helper = (i, nums) => {
  if (i === nums.length) return [[]];

  let resPerms = [];
  let perms = helper(i + 1, nums);
  for (let perm of perms) {
    for (let j = 0; j <= perm.length; j++) {
      const element = [...perm];
      element.splice(j, 0, nums[i]);
      resPerms.push(element);
    }
  }
  return resPerms;
};
