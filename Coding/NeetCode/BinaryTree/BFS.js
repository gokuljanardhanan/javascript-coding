const BFS = (root) => {
  if (!root) return null;
  const queue = [root];
  let level = 0;

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const item = queue.shift();
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    level++;
  }
  return level;
};
