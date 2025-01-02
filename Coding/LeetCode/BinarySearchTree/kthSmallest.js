//Time Complexity: O(h+k) where h is the height of the tree and k is the number of elements in the tree
//Space Complexity: O(h) where h is the height of the tree
var kthSmallestEfficientIterative = function (root, k) {
  let stack = [];
  let count = 0;

  while (root !== null || stack.length > 0) {
    // Traverse the left subtree
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    // Pop from the stack and visit the node
    root = stack.pop();
    count++;

    // If we've visited the kth node, return its value
    if (count === k) {
      return root.val;
    }

    // Move to the right subtree
    root = root.right;
  }
};

//Time Complexity: O(n)
//Space Complexity: O(n)
var kthSmallestRecursion = function (root, k) {
  if (!root) return 0;
  const result = [];
  const inorderRecursive = (node) => {
    if (!node) return;

    inorderRecursive(node.left);
    result.push(node.val);
    inorderRecursive(node.right);
  };
  inorderRecursive(root);
  return result[k - 1];
};

const root = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 48,
    left: {
      val: 12,
      left: null,
      right: null,
    },
    right: {
      val: 49,
      left: null,
      right: null,
    },
  },
};

console.log(kthSmallest(root, 1));
