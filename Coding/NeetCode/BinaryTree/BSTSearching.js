/*
Binary search tree: A binary search tree is a binary tree in which every node fits a specific ordering property: 
all left descendents <= n < all right descendents. This must be true for each node n.
BST is better than a sorted array because it is more efficient to add and remove elements with complexity O(log n) than O(n) in a sorted array.
*/

// Time Complexity: O(log(n)) : In an average case, the time complexity is O(log(n))
// where n is the number of nodes in the balanced binary search tree. In unbalanced binary search trees, the time complexity is O(n).
// This is also mentioned as O(h) where h is the height of the binary search tree. h = log(n) for a balanced binary search tree.
// Space Complexity: O(1)
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) {
    return root;
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
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

console.log(searchBST(head, 4)); // true
console.log(searchBST(head, 1)); // false
