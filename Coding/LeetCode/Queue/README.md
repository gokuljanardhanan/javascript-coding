Queue: Overview
A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added to the end (rear) of the queue and removed from the front. It is commonly used in scenarios like task scheduling, order processing, and breadth-first search (BFS).

Operations and Complexity
Basic Operations

enqueue(x): Adds an element x to the rear of the queue.
Complexity: O(1) (if implemented properly with pointers or a dynamic array).
dequeue(): Removes an element from the front of the queue.
Complexity: O(1) (if implemented with pointers).
front(): Retrieves the front element without removing it.
Complexity: O(1).
isEmpty(): Checks if the queue is empty.
Complexity: O(1).
size(): Returns the number of elements in the queue.
Complexity: O(1).
Representations

Array-based Representation: Use a fixed-size or dynamic array to store elements. It requires a front and rear pointer to track the first and last elements.
Linked List Representation: Use nodes where each node points to the next element.
Queue Representation in an Array

Example:

let queue = [];
Operations with Array Representation
Operation Code Array Representation Explanation
enqueue(1) queue.push(1) [1] Adds 1 to the rear.
enqueue(2) queue.push(2) [1, 2] Adds 2 to the rear.
enqueue(3) queue.push(3) [1, 2, 3] Adds 3 to the rear.
dequeue() queue.shift() [2, 3] Removes 1 from the front.
front() queue[0] [2, 3] Retrieves 2, the front element.
isEmpty() queue.length === 0 [2, 3] Returns false.
size() queue.length [2, 3] Returns 2.
Complexity of Array Representation
enqueue(x): O(1) – Adding to the rear (end of array) is efficient.
dequeue(): O(n) – Removing from the front shifts all elements.
Space Complexity: O(n) – Array stores all elements.
Optimized Array Representation (Circular Queue)
To optimize dequeue() (avoid shifting elements), a circular queue uses pointers to manage the front and rear.

Example Representation:
Array: [null, 1, 2, null, null]
Front Pointer: 1
Rear Pointer: 2
Operations:
enqueue(x): Place x at the next available rear position (wraps around if needed).
dequeue(): Advance the front pointer without shifting elements.
Complexity: All operations are O(1).
Key Comparisons: Queue Implementations
Feature Simple Array-Based Queue Circular Queue Linked List Queue
Space Efficiency Inefficient (shifting) Efficient Efficient
Dequeue Complexity O(n) O(1) O(1)
Dynamic Resizing Easy (dynamic arrays) Requires handling Easy
Use Case Small datasets Memory-constrained Flexible and large datasets
Applications of Queues
Task Scheduling: Process tasks in order (e.g., OS process management).
Breadth-First Search (BFS): Explore levels of a graph or tree.
Data Buffers: Maintain order in streaming data or messaging systems.
