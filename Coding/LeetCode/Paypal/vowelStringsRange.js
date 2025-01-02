//Company : Paypal
//Topics : String, Array , Prefix Sum

//Time complexity : (O(n + q)) where n is the length of the words array and q is the length of the queries array.
//Space complexity : O(n+q) where n is the length of the words array and q is the length of the queries array.
var vowelStrings = function (words, queries) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const isVowelString = (word) =>
    vowels.has(word[0]) && vowels.has(word[word.length - 1]);

  // Precompute a prefix sum array
  const prefix = Array(words.length + 1).fill(0);
  for (let i = 0; i < words.length; i++) {
    prefix[i + 1] = prefix[i] + (isVowelString(words[i]) ? 1 : 0);
  }

  // Answer each query using the prefix sum array
  const ans = [];
  for (const [li, ri] of queries) {
    ans.push(prefix[ri + 1] - prefix[li]);
  }

  return ans;
};

/*
You are given a 0-indexed array of strings words and a 2D array of integers queries.
Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.
Return an array ans of size queries.length, where ans[i] is the answer to the ith query.
Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0].
*/
