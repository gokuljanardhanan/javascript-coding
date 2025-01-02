//Company : Paypal
//Topics : String, Greedy, Heap

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Swap utility function
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Push element into the heap
  push([char, freq]) {
    this.heap.push([char, freq]);
    this._heapifyUp();
  }

  // Pop the maximum element from the heap
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  // Peek the maximum element
  peek() {
    return this.heap[0];
  }

  // Check if heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][1] >= this.heap[index][1]) break;
      this.swap(parent, index);
      index = parent;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < length && this.heap[left][1] > this.heap[largest][1])
        largest = left;
      if (right < length && this.heap[right][1] > this.heap[largest][1])
        largest = right;

      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }
}

function reorganizeString(s) {
  // Step 1: Count frequencies of characters
  const freqMap = new Map();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Step 2: Build a max heap
  const maxHeap = new MaxHeap();
  for (const [char, freq] of freqMap.entries()) {
    maxHeap.push([char, freq]);
  }

  // Step 3: Rebuild the string
  let result = "";
  let prev = null; // To store the previous character and its remaining frequency

  while (!maxHeap.isEmpty()) {
    const [char, freq] = maxHeap.pop();

    // Append the current character to the result
    result += char;

    // If the previous character still has remaining frequency, push it back into the heap
    if (prev && prev[1] > 0) {
      maxHeap.push(prev);
    }

    // Update the previous character to the current one, with its frequency decremented
    prev = [char, freq - 1];
  }

  // If the result length is not equal to the input string, return ""
  return result.length === s.length ? result : "";
}

// Test cases
console.log(reorganizeString("aab")); // Output: "aba"
console.log(reorganizeString("aaab")); // Output: ""
console.log(reorganizeString("aaabbc")); // Output: "ababac"
console.log(reorganizeString("aaabbbcc")); // Output: "ababcbac"

/*
Approach:
1. Count the frequency of each character in the string.
2. Build a max heap of characters based on their frequency.
3. Pop the character with the highest frequency from the heap and append it to the result string.
4. If the previous character still has remaining frequency, push it back into the heap.
5. Update the previous character to the current one with its frequency decremented.
Why do we use a max heap? : We use a max heap to ensure that we always pick the character with the highest frequency first. 
This helps in avoiding adjacent characters with the same value.
Greedy : At each step, we pick the character with the highest frequency to ensure that 
we don't have adjacent characters with the same value.
Finally, we return the result string if its length is equal to the input string,
In case it's not equal, we return an empty string as it's not possible to rearrange the characters.
In code if its not able to rearrange the characters the length of the result string will not be equal to the input string.
This is because we are appending the characters to the result string only if the previous character still has remaining frequency.
So if there is a word which cannot rearrange previous character will have remaining frequency and it will not be appended to the result string.
*/
/*
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
Return any possible rearrangement of s or return "" if not possible.

Example 1:
Input: s = "aab"
Output: "aba"

Example 2:
Input: s = "aaab"
Output: ""
*/
