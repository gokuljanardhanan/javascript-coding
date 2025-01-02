//  Time complexity : O(n)
// Space complexity : O(1)
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head; // Handle edge cases: empty list or single node

  let dummy = head;
  let count = 0;

  // Calculate the length of the list
  while (dummy) {
    count++;
    dummy = dummy.next;
  }

  // Adjust k to ensure it's within the length of the list
  k = k % count;
  if (k === 0) return head; // No rotation needed

  let first = head;
  let second = head;

  // Move the `first` pointer k steps ahead
  for (let i = 0; i < k; i++) {
    first = first.next;
  }

  // Move both pointers until `first` reaches the end
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  // Perform the rotation
  first.next = head; // Connect the last node to the head
  const newHead = second.next; // The new head is `second.next`
  second.next = null; // Break the cycle

  return newHead;
};

//Given the head of a linked list, rotate the list to the right by k places.
