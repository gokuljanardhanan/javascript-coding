//Time complexity: O(n)
//Space complexity: O(1)
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Save the next node
    let next = current.next;

    // Reverse the current node's pointer
    current.next = prev;

    // Move the pointers forward
    prev = current;
    current = next;
  }

  // Return the new head (prev now points to the new head)
  return prev;
};

/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/
