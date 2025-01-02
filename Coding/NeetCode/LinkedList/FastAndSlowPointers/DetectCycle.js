const DetectCycle = (head) => {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
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

console.log(DetectCycle(head)); // true
