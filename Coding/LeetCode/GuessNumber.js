var guessNumber = function (n) {
  let left = 0,
    right = n;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    const out = guess(mid);
    if (out === 0) {
      return mid;
    } else if (out === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

/*
Guess Number Higher or Lower
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1
*/
