function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

/*
Base case : string length 1 : palindromeString('a') ->  true
Examples : 
    palindromeString("a")     : true
    palindromeString("aa")    : true
    palindromeString("ab")    : false
    palindromeString("aba")   : true
    palindromeString("abba")  : true
    palindromeString("abca")  : false
Pattern -> 
    palindromeString(str.length === 1) -> true

Code :
    if string length is 1 -> return true
    else check both if sides equal, if not return false
    palindromeString(str.slice(1,-1)) or palindromeString(str.slice(1,str.length)) -> remove first and last characters

*/

/*
Simplest Possible Input:

A single character or empty string is always a palindrome.

Play Around with Examples:

isPalindrome("a") = true
isPalindrome("aba") = true, since "a" matches "a" and "b" is a palindrome.

Relate Hard Cases to Simple Cases:

Compare the first and last characters. If they match, check the substring excluding them.

Generalize Pattern:

isPalindrome(str) = (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, -1))

Write Code:

function isPalindrome(str) {
    if (str.length <= 1) return true; // Base case
    if (str[0] !== str[str.length - 1]) return false; // Base case for mismatch
    return isPalindrome(str.slice(1, -1)); // Recursive relation
}
*/
