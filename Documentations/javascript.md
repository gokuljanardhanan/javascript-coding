1. Data Types
   Primitive Types:
   Primitive types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed. When you assign a primitive value to a variable, the actual value is stored directly in the variable.
   Immutability: Primitive values cannot be altered. Any operation that appears to modify a primitive value actually creates a new value.
   Copying: When you assign a primitive value to another variable, a copy of the value is made.
   Comparison: Primitive values are compared by value. Two variables are considered equal if they hold the same value.
   Memory Allocation: Primitive values are stored on the stack, which allows for quick access and efficient memory management.
1. Number : Represents both integer and floating-point numbers. (typeof = number)
1. String : Represents a sequence of characters. (typeof = string)
1. Boolean : Represents a logical entity with two values: true or false.(typeof = boolean)
1. Undefined : Indicates a variable that has been declared but not initialized.(typeof = undefined)
1. Null : Represents the intentional absence of any object value.(typeof = object)
1. Symbol : Represents a unique and immutable identifier.(typeof = symbol)
1. BigInt : Represents whole numbers larger than 2^53 - 1 (typeof = bigint)
   Reference Types: (Objects):
   Mutability: Reference type values can be changed. Modifying an object referenced by a variable affects all references to that object.
   Copying: When you assign a reference type value to another variable, a reference to the same value is made, not a copy of the value itself.
   Comparison: Reference types are compared by reference, meaning two variables are considered equal if they reference the same object.
   Memory Allocation: Reference values are stored on the heap, which allows for dynamic memory allocation.

1.Object : Represents a collection of properties and methods.(typeof = object) 2. Array : Represents an ordered list of values.(typeof = object) 3. Function : Represents a block of code designed to perform a particular task.(typeof = function) 4. Date : Represents dates and times.(typeof = object) 5. RegExp : Represents regular expressions for pattern matching within strings.(typeof = object) 6. Map : Represents a collection of keyed data items.(typeof = object) 7. Set : Represents a collection of unique values.(typeof = object) 8. WeakMap : Similar to Map, but with weakly referenced keys.(typeof = object) 9. WeakSet : Similar to Set, but with weakly referenced values.(typeof = object)

- type of null === object : this is considered a bug in JavaScript, but it is retained for backward compatibility
- typeof func === "function" : In JavaScript, functions are indeed a type of object, but they are treated specially. The typeof operator returns "function" for functions to provide a more specific and useful result than simply "object". Here’s why this distinction is made and why it’s useful
- null == undefined returns true : due to the way the equality operator (==) performs type coercion, According to the ECMAScript specification, null and undefined are considered equal to each other when using the == operator, but not to any other values. This is a special rule that ensures these two values are treated as equivalent in comparisons.

2. Promise APIs
   Promise:
   In JavaScript, a Promise is a built-in object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a way to work with asynchronous code more effectively, handling operations like data fetching, file reading, or timer-based tasks.

Pending: The initial state, indicating that the promise is neither fulfilled nor rejected.
Fulfilled: The state when the operation completes successfully, with a resulting value.
Rejected: The state when the operation fails, with a reason or error.

Promise.resolve(value): Returns a promise that is resolved with the given value.
Promise.reject(reason): Returns a promise that is rejected with the given reason.

Promises in JavaScript come with several built-in methods, or APIs, that help manage and control the flow of asynchronous operations.
Promise.all
Returns a single promise(array of resolved values) that resolves when all of the promises in the array have resolved.
Rejects when any of the promises in the array rejects, returning a promise with the same error.
If any of the promises is rejected, it immediately returns the same error, but the rest of the promise in progress will resolve/reject in future, doesn't matter. (promise cannot be canceled)
FAIL FAST
Promise.all([promise1, promise2, promise3]) .then((results) => {
console.log(results); // [val1, val2, val3]
}).catch((error) => {
console.error(error); // error
});
Success -> [val1, val2, val3]
Error -> error

Promise.allSettled
Takes an array of promises
Returns a promise that resolves when all of the promises have settled (either resolved or rejected)
Promise.allSettled([promise1, promise2, promise3]).then((results) => {
console.log(results); [res1, err2,res3]
[{ status: 'rejected', reason: 1 },{ status: 'fulfilled', value: 2 }]
});
Promise.race
takes an array of promises
Returns a promise that resolves or rejects as soon as any of the promises in the array resolves or rejects.
Promise.race([promise1, promise2, promise3]).then((result) => {
console.log(result); // val1 or val2 or val3 })
.catch((error) => {console.error(error); // err1 or err2 or err3});
Promise.any
takes an array of promises
Returns a single promise that resolves as soon as any of the promises in the array resolves or rejects if all of the promises reject.

Promise.any([promise1, promise2, promise3]).then((result) => {
console.log(result); // val1 or val2 or val3
}).catch((error) => {
console.error(error); // [err1,err2,err3]
});

3. Coercion
4. ProtoType
5. Object methods:
   preventExtensions : Allow updating existing key values, delete existing key/value. DIsable adding new key/value
   Seal : Allow updating existing key values. Disable delete existing key, adding new key/value
   Freeze : Disable updating existing key values, delete existing key, adding new key/value
   Object.defineProperty(obj, 'name', {
   value: 'John',
   writable: false, // Cannot change the value
   enumerable: true, // Can be enumerated (optional)
   configurable: false // Cannot delete or reconfigure (optional)
   });

ARRAY AND SETS
Arrays and Sets are both used to store collections of elements in JavaScript, but they have different properties, use cases, and behaviors:

1. Data Structure:
   Array:
   An array is an ordered list of elements, where each element is assigned an index starting from 0.
   Arrays allow duplicate values.
   Set:
   A Set is an unordered collection of unique elements.
   Sets automatically remove duplicate values.
2. Order:
   Array:
   The elements in an array are ordered by index. The order in which you add elements to an array is preserved.
   Set:
   A Set does not maintain the order of elements by default. However, JavaScript’s Set implementation does preserve the insertion order when iterating.
3. Duplicate Values:
   Array:
   Arrays can contain duplicate values. For example, [1, 2, 2, 3] is a valid array.
   Set:
   Sets do not allow duplicate values. If you try to add a value that already exists in the Set, it will be ignored.
4. Performance:
   Array:
   Accessing elements by index in an array is O(1).
   Adding or removing elements (especially from the middle) can be costly (O(n)).
   Checking for the existence of an element involves linear search (O(n)), unless you manually sort the array and perform binary search.
   Set:
   Checking if an element is in a Set is typically O(1), making it faster than an array for this operation.
   Adding or removing elements from a Set is also O(1) on average.
5. Use Cases:
   Array:
   Use arrays when you need to maintain the order of elements or need to allow duplicates.
   Arrays are ideal for indexed collections of data, like lists of items, queues, or stacks.
   Set:
   Use sets when you need to store unique values or perform fast lookups.
   Sets are useful for tasks like filtering duplicates from an array or checking the presence of a value in a collection.
6. Methods:
   Array Methods:
   push(), pop(), shift(), unshift(), slice(), splice(), map(), filter(), reduce(), etc.
   Set Methods:
   add(), delete(), has(), clear(), size, and the ability to iterate with forEach().
7. Example Comparison:
   Array Example:
   javascript
   Copy code
   let arr = [1, 2, 2, 3];
   console.log(arr); // Output: [1, 2, 2, 3]
   Set Example:
   let set = new Set([1, 2, 2, 3]);
   console.log([...set]); // Output: [1, 2, 3]
   Summary:
   Arrays are ordered collections that allow duplicates, good for maintaining sequence and performing indexed operations.
   Sets are unordered collections that enforce uniqueness, making them suitable for quick existence checks and storing unique items.
   Array.from method
   Converts array-like or iterable objects to arrays.
   Allows transformation of elements during array creation.
   Generates arrays from empty slots with specific values.
   Creates shallow copies of arrays.
   Handles sparse arrays by filling empty slots with undefined.

RETURN, BREAK, CONTINUE
The return, break, and continue statements are used in JavaScript to control the flow of execution in functions and loops. Each serves a distinct purpose:

1. return Statement:
   Purpose: Exits a function and optionally returns a value to the function caller.
   Use Cases:
   Function Termination: When a specific condition is met within a function, and you want to stop further execution and return a result.
   Output Results: Returning the result of calculations, data retrieval, or any processing done within a function.
   Conditional Return: Returning different values based on certain conditions inside the function.
   function findMax(a, b) {
   if (a > b) {
   return a; // Return a if it's greater
   }
   return b; // Otherwise, return b
   }
   console.log(findMax(10, 20)); // Output: 20

2. break Statement:
   Purpose: Exits the loop immediately, stopping all further iterations.
   Use Cases:
   Exiting Early: When you have found what you’re looking for in a loop and want to exit early to avoid unnecessary iterations.
   Nested Loops: Breaking out of inner loops without affecting outer loops.
   Switch Statements: Used to exit a switch case after executing a particular case block.
   for (let i = 0; i < 10; i++) {
   if (i === 3) {
   break; // Exit loop when i equals 3
   }
   console.log(i);
   }
   // Output: 0, 1, 2

Switch Example:
switch (day) {
case 'Monday':
console.log('Start of the week');
break;
case 'Friday':
console.log('End of the work week');
break;
default:
console.log('Midweek');
} 3. continue Statement:
Purpose: Skips the current iteration of the loop and moves directly to the next iteration.
Use Cases:
Skipping Specific Iterations: When you want to skip processing for certain conditions within a loop and continue with the next iteration.
Filtering Data: In loops, you might want to skip processing elements that don’t meet specific criteria.
Optimizing Performance: Avoid unnecessary code execution within certain loop iterations to improve performance.
for (let i = 0; i < 10; i++) {
if (i % 2 !== 0) {
continue; // Skip odd numbers
}
console.log(i);
}
// Output: 0, 2, 4, 6, 8
Summary of Differences:
return: Used within functions to exit and optionally return a value. It stops all function execution.
break: Used in loops or switch statements to exit the loop or case block entirely.
continue: Used in loops to skip the current iteration and move to the next one, without exiting the loop.
