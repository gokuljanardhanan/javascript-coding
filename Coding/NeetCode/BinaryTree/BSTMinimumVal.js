// Time Complexity: O(log n)
// Space Complexity: O(1)
const findBSTMinimum = (root) => {
  let curr = root;
  while (curr && curr.left) {
    curr = curr.left;
  }
  return curr;
};

// Test cases
const head = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};

console.log(findBSTMinimum(head)); // 2
