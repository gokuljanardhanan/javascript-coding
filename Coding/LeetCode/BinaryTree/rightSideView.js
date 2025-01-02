//Time complexity : O(n)
//Space complexity : O(w) where w is the maximum width of the tree
var rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const out = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const item = queue.shift();
      console.log(i, item.val);

      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
      if (i === levelSize - 1) out.push(item.val);
    }
  }
  return out;
};

const root = {
  val: 1,
  left: null,
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log(rightSideView(root)); // Output: [1, 3]

const root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
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
console.log(rightSideView(root1)); // Output: [1, 3, 4]

const root2 = null;
console.log(rightSideView(root2)); // Output: []

/*
Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.
*/
