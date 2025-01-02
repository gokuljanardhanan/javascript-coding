// Time Complexity = O(n)
// Space Complexity = O(w) where w is the maximum width of the tree
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const zigzagArr = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelItems = [];

    for (let i = 0; i < levelSize; i++) {
      const item = queue.shift();
      levelItems.push(item.val);
      console.log(item.val);

      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    if (zigzagArr.length % 2 === 1) levelItems.reverse();
    zigzagArr.push(levelItems);
  }
  return zigzagArr;
};

//This approach eliminates the need to reverse the levelItems array by toggling the direction of traversal
//Time Complexity = O(n)
//Space Complexity = O(w) where w is the maximum width of the tree
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const zigzagArr = [];
  let isLeftToRight = true; // Track direction of traversal

  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelItems = new Array(levelSize); // Pre-allocate space for level values

    for (let i = 0; i < levelSize; i++) {
      const item = queue.shift();

      // Determine the position to insert the current value
      const index = isLeftToRight ? i : levelSize - 1 - i;
      levelItems[index] = item.val;

      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }

    zigzagArr.push(levelItems);
    isLeftToRight = !isLeftToRight; // Toggle direction for the next level
  }

  return zigzagArr;
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
console.log(zigzagLevelOrder(root)); // Output: [ [ 3 ], [ 20, 9 ], [ 15, 7, 3, 4 ] ]

/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, 
then right to left for the next level and alternate between).
*/
