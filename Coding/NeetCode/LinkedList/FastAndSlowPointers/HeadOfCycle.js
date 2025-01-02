const HeadOfCycle = (head) => {
  let fast,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }

  if (!fast || !fast.next) {
    return null;
  }

  let slow2 = head;
  while (slow2 !== slow) {
    slow2 = slow2.next;
    slow = slow.next;
  }
  return slow;
};

// Test cases
let head = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null,
      },
    },
  },
};

head.next.next.next.next = head.next;
console.log(HeadOfCycle(head)); // 2

/*
Description:
Write a function that takes the head of a linked list and returns the node where the cycle begins. If there is no cycle, return null.
*/
