// Time complexity : O(n)
// Space complexity : O(w) where w is the maximum width of the tree
var averageOfLevels = function (root) {
  if (!root) return [];

  const queue = [root]; // Queue for level-order traversal
  const res = []; // Result array to store averages

  while (queue.length > 0) {
    let levelSize = queue.length; // Number of nodes at the current level
    let levelSum = 0; // Sum of values at the current level

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelSum += currentNode.val;

      // Add children to the queue for the next level
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // Calculate and store the average for the current level
    res.push(levelSum / levelSize);
  }

  return res;
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
console.log(averageOfLevels(root)); // Output: [ 3, 14.5, 7.25 ]

/*
Given the root of a binary tree, return the average value of the nodes on each level 
in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.
*/
