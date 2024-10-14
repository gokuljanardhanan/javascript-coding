function isAnagram(a, b) {
  if (a.length !== b.length) {
    return "NO";
  }

  const charCount = new Array(26).fill(0); // For lowercase alphabets

  for (let i = 0; i < a.length; i++) {
    charCount[a.charCodeAt(i) - 97]++; // Increment count for characters in string a
    charCount[b.charCodeAt(i) - 97]--; // Decrement count for characters in string b
  }

  for (let count of charCount) {
    if (count !== 0) {
      return "NO";
    }
  }

  return "YES";
}
console.log(isAnagram("b", "d")); // YES
// console.log(isAnagram("allergy", "allergic")); // NO

var isAnagramNew = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};
