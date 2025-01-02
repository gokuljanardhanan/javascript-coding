// Time complexity : O(max(m, n)), where m is the length of l1 and n is the length of l2.
// Space complexity : O(max(m, n))
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = { val: 0, next: null }; // Dummy node to start the result list
  let current = dummy; // Pointer to build the result list

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0; // Get value from l1 or 0 if null
    const val2 = l2 ? l2.val : 0; // Get value from l2 or 0 if null

    const sum = val1 + val2 + carry; // Sum of values and carry
    carry = Math.floor(sum / 10); // Update carry

    // Create new node for the sum's unit place
    current.next = { val: sum % 10, next: null };
    current = current.next; // Move pointer to the next node

    // Move l1 and l2 pointers if they are not null
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // Return the result list starting from the first node
};

// Linked list l1 = [2, 4, 3]
const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

// Linked list l2 = [5, 6, 4]
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

// Call function
const result = addTwoNumbers(l1, l2);

// Print result as a linked list
console.log(JSON.stringify(result));

// {
//   "val": 7,
//   "next": {
//     "val": 0,
//     "next": {
//       "val": 8,
//       "next": null
//     }
//   }
// }

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
