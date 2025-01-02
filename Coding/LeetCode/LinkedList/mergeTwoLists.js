//Time complexity : O(m + n)
// Space complexity : O(1)

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let output;
  let currentOut;

  if (list1.val <= list2.val) {
    output = list1;
    list1 = list1.next;
  } else {
    output = list2;
    list2 = list2.next;
  }

  currentOut = output;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentOut.next = list1;
      list1 = list1.next;
    } else {
      currentOut.next = list2;
      list2 = list2.next;
    }
    currentOut = currentOut.next;
  }

  // Attach the remaining elements if one of the lists is exhausted
  currentOut.next = list1 ? list1 : list2;

  return output;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Create nodes
let head1 = new ListNode(1);
let second1 = new ListNode(3);
let third1 = new ListNode(5);

let head2 = new ListNode(2);
let second2 = new ListNode(4);
let third2 = new ListNode(6);

// Link nodes
head1.next = second1;
second1.next = third1;

head2.next = second2;
second2.next = third2;

console.log(mergeTwoLists(head1, head2)); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/
