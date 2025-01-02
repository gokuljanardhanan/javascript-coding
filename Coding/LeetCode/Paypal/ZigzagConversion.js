//Company : Paypal
//Topics : String, Array

// Time complexity : O(n) where n is the length of the string s.
// Space complexity : O(n) where n is the length of the string s.

/*
Approach : Create a 1D array of strings to store the characters in the zigzag pattern.
Traverse the string and keep adding the characters to the respective rows.
If we reach the first or last row, change the direction.
Join the rows and return the result.
*/
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
  let isGoingDown = false;
  let currRow = 0;

  for (let char of s) {
    rows[currRow] = rows[currRow] + char;
    if (currRow === 0 || currRow === numRows - 1) {
      isGoingDown = !isGoingDown;
    }
    currRow += isGoingDown ? 1 : -1;
  }
  return rows.join("");
};

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
*/
