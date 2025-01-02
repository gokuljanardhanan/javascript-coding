// Time complexity : O(n)
// Space complexity : O(1)
var countStudents = function (students, sandwiches) {
  let count0 = 0; // Count of students preferring sandwich type 0
  let count1 = 0; // Count of students preferring sandwich type 1

  // Count preferences in the students array
  for (let student of students) {
    if (student === 0) count0++;
    else count1++;
  }

  // Process the sandwiches stack
  for (let sandwich of sandwiches) {
    if (sandwich === 0) {
      if (count0 > 0) {
        count0--; // A student who prefers 0 takes this sandwich
      } else {
        break; // No student left who wants type 0
      }
    } else {
      if (count1 > 0) {
        count1--; // A student who prefers 1 takes this sandwich
      } else {
        break; // No student left who wants type 1
      }
    }
  }

  // The remaining students are those who couldn't eat
  return count0 + count1;
};

/*
The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.


Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
*/
