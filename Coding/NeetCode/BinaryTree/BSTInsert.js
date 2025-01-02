class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
// Time Complexity: O(log(n)) : In an average case, the time complexity is O(log(n))
//Space Complexity: O(1)
const BSTInsert = (root, val) => {
  if (!root) return TreeNode(val);
  if (val > root.val) {
    root.right = BSTInsert(root.right, val);
  } else if (val < root.val) {
    root.left = BSTInsert(root.left, val);
  }
  return root;
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

console.log(BSTInsert(head, 4)); // true
console.log(BSTInsert(head, 1)); // false
