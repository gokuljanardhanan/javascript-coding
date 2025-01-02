// Time complexity : O(max(n, m))
// Space complexity : O(max(n, m)) where n and m are the lengths of the two binary strings
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0;

    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};

// Example usage
const a = "1010";
const b = "1011";
console.log(addBinary(a, b)); // Output: "10101"

//Given two binary strings a and b, return their sum as a binary string.
