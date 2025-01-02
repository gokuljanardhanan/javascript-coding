//Floyd's Cycle Detection Algorithm or Two Pointer Technique or Tortoise and Hare Algorithm

// Time Complexity : O(n)
// Space Complexity : O(1)
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow pointer by 1 step
    fast = fast.next.next; // Move fast pointer by 2 steps

    // If slow and fast meet, there is a cycle
    if (slow === fast) {
      return true;
    }
  }

  // If fast reached the end of the list, there is no cycle
  return false;
};

console.log(hasCycle([3, 2, 0, -4])); // Output: true
console.log(hasCycle([1, 2])); // Output: true
console.log(hasCycle([1])); // Output: false

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// Create nodes
let head = new ListNode(3);
let second = new ListNode(2);
let third = new ListNode(0);
let fourth = new ListNode(-4);

// Link nodes
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second; // Creates a cycle
console.log(hasCycle(head)); // Output: true

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
*/
