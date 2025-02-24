// Time complexity : O(n)
// Space complexity : O(1)
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // Find the middle of the linked list
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the first and second halves
  let left = head,
    right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
};

/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 */
