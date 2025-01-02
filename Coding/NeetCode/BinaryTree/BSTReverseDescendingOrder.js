var reversalDescendingOrder = function (root) {
  const result = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.right);
    result.push(node.val);
    inorder(node.left);
  };
  inorder(root);
  return result;
};

// Test cases

const head = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 20,
      left: null,
      right: null,
    },
  },
};
console.log(reversalDescendingOrder(head)); //[ 20, 15, 10, 7, 5, 3 ]

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: 
*/
