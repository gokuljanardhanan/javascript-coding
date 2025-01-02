var findMin = (root) => {
  let curr = root;
  while (curr && curr.left) {
    curr = curr.left;
  }
  return curr;
};
// Time complexity: O(log n)
// Space complexity: O(1)
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.right) {
      return root.left;
    } else if (!root.left) {
      return root.right;
    } else {
      const minNode = findMin(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
    }
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

console.log(deleteNode(head, 3)); //{val: 5,left: { val: 4, left: { val: 2, left: null, right: null }, right: null }}
console.log(deleteNode(head, 4)); //{val: 5,left: { val: 3, left: { val: 2, left: null, right: null }, right: null }}

/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
*/
