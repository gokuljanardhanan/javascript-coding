var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.head;
  let count = 0;
  while (node !== null) {
    if (count === index) return node.val;
    node = node.next;
    count++;
  }
  return -1; // Return -1 if index is out of bounds
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = { val, next: this.head };
  this.head = newNode;
  if (!this.tail) {
    // If the list was empty, update the tail as well
    this.tail = newNode;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = { val, next: null };
  if (!this.tail) {
    // If the list was empty, set both head and tail
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode; // Update the tail
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let node = this.head;
  let count = 0;

  while (node !== null) {
    if (count === index - 1) {
      const newNode = { val, next: node.next };
      node.next = newNode;
      if (newNode.next === null) {
        // Update the tail if new node is added at the end
        this.tail = newNode;
      }
      return;
    }
    node = node.next;
    count++;
  }

  // If the index is out of bounds, do nothing
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    if (this.head) {
      this.head = this.head.next;
      if (this.head === null) {
        // If the list becomes empty, update the tail
        this.tail = null;
      }
    }
    return;
  }

  let node = this.head;
  let count = 0;

  while (node !== null) {
    if (count === index - 1 && node.next !== null) {
      node.next = node.next.next;
      if (node.next === null) {
        // Update the tail if the last node was removed
        this.tail = node;
      }
      return;
    }
    node = node.next;
    count++;
  }

  // If the index is out of bounds, do nothing
};

/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
*/
