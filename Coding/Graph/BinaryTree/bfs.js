const bfsTraverse = (root) => {
  if (!root) return;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift(); // Dequeue the front node
    console.log(node.val); // Process the current node

    if (node.left) queue.push(node.left); // Enqueue left child
    if (node.right) queue.push(node.right); // Enqueue right child
  }
};
bfsTraverse(root);
