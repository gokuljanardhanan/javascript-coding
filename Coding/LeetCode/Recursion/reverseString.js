//Time Complexity:  O(n), where n is the length of the string
//Space Complexity: O(n), where n is the length of the string
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("a")); //a
console.log(reverseString("ab")); //ba
console.log(reverseString("abc")); //cba

/*
Base case : string length 1 : reverseString('a') -> 'a'
Examples : 
    reverseString("a")     : a
    reverseString("ab")    : ba
    reverseString("abc")   : cba
    reverseString("abcd")  : dcba
Pattern -> 
    reverseString(str) -> reverse string without first character + first character
    Eg: reverseString("ab") -> reverseString("b") + "a" -> "b" + "a" -> "ba"

Code :
    if string length is 1 -> return string
    else return reverseString(str.slice(1)) + str[0]

*/

/*
1. Simplest Possible Input:
An empty string (""). Base case: reverse("") = "".
2.Play Around with Examples:
reverse("a") = "a"
reverse("ab") = "b" + reverse("a") = "ba"
3.Relate Hard Cases to Simple Cases:
To reverse a string, take the last character and append it to the reverse of the remaining string.
4.Generalize Pattern:
reverse(str) = last character + reverse(remaining string).
5.Write Code:
function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.slice(1)) + str[0]; // Recursive relation
}
*/
