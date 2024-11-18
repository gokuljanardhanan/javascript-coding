const maxDepth = (node) => {
  if (node === null) {
    return 0;
  }

  const leftDepth = maxDepth(node.left);
  const rightDepth = maxDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

// Test cases
const tree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null,
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
};
console.log(maxDepth(tree)); // 2

const tree2 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
};

console.log(maxDepth(tree2)); // 3

//BFS -> Check each level and increment depth
const maxDepthIteration = (node) => {
  const queue = [node];
  let depth = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const item = queue.shift();
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    depth++;
  }
  return depth;
};

console.log(maxDepthIteration(tree));
console.log(maxDepthIteration(tree2));
