const LongestPalindromicSubstring = (s) => {
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;
    // odd length
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }
      l--;
      r++;
    }
    //Even length
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }
      l--;
      r++;
    }
  }
};

/*
Write a function that returns the longest palindromic substring in a string using dynamic programming.
*/
