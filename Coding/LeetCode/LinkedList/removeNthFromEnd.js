// Time complexity: O(n)
// Space complexity: O(n)
var removeNthFromEnd = function (head, n) {
  let dummy = { val: 0, next: head };
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};

/*
To identify nth element from the end, we can use two pointer technique.
We will use two pointers, first and second, and move the first pointer n steps ahead.
Then we will move both pointers one step at a time until the first pointer reaches the end.

From head to the node to remove, we have Length - n steps.
For first pointer if we travel n steps, then we have Length - n steps left.
At this point start the second pointer and move both pointers one step at a time, 
and when the first pointer reaches the end, the second pointer will be at the node to remove.

If we want to remove head itself, then we need to have a dummy node before head.

*/

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/
