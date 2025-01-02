// Time complexity : 0(1)
// Space complexity : 0(1)
var reverseBits = function (n) {
  let reversed = 0;

  // Iterate through all 32 bits
  for (let i = 0; i < 32; i++) {
    // Extract the least significant bit (LSB) of n
    let bit = n & 1;

    // Shift the reversed result to the left and add the extracted bit
    reversed = (reversed << 1) | bit;

    // Shift n to the right to process the next bit
    n = n >> 1;
  }

  // Return the reversed number as an unsigned 32-bit integer
  return reversed >>> 0;
};

// Test the function
console.log(reverseBits(43261596)); // Output: 964176192
console.log(reverseBits(1)); // Output: 2147483648

// Reverse bits of a given 32 bits unsigned integer.
