var encode = function (strs) {
  let encodedString = "";
  for (const str of strs) {
    encodedString += str.length + "#" + str; // Add length + '#' + actual string
  }
  return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const out = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    // Find the '#' delimiter
    while (s[j] !== "#") j++;

    const len = parseInt(s.slice(i, j)); // Extract the length
    const word = s.slice(j + 1, j + 1 + len); // Extract the string
    out.push(word);

    i = j + 1 + len; // Move the pointer to the next length marker
  }

  return out;
};

/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).
*/
