// Time complexity : O(n)
// Space complexity : O(w) where w is the maximum width of the tree

var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const out = [];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelItems = [];

    for (let i = 0; i < levelSize; i++) {
      const item = queue.shift();
      levelItems.push(item.val);

      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    out.push(levelItems);
  }
  return out;
};

const root = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 15,
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
    val: 20,
    left: {
      val: 3,
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

const root1 = {
  val: 1,
  left: null,
  right: null,
};

const root2 = null;

console.log(levelOrder(root)); // Output: [ [ 3 ], [ 9, 20 ], [ 15, 7, 3, 4 ] ]
console.log(levelOrder(root1)); // Output: [ [ 1 ] ]
console.log(levelOrder(root2)); // Output: []

/*
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
*/
