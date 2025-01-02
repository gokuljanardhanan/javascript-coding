//Company : Paypal
//Topics : Array, Heap, Greedy
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (index < length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[largest]
      ) {
        largest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[largest]
      ) {
        largest = rightChildIndex;
      }

      if (largest === index) break;
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      index = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function lastStoneWeight(stones) {
  const maxHeap = new MaxHeap();

  // Convert stones into a max-heap
  stones.forEach((stone) => maxHeap.push(stone));

  // Process stones until one or none remain
  while (maxHeap.size() > 1) {
    const x = maxHeap.pop();
    const y = maxHeap.pop();

    if (x !== y) {
      maxHeap.push(x - y);
    }
  }

  return maxHeap.size() === 0 ? 0 : maxHeap.pop();
}

// Test cases
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // Output: 1
console.log(lastStoneWeight([1])); // Output: 1
console.log(lastStoneWeight([10, 7, 7, 8])); // Output: 1

/*
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

 

Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
Example 2:

Input: stones = [1]
Output: 1
*/
