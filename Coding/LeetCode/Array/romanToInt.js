var romanToInt = function (s) {
  const val = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    // If the current Roman numeral is less than the next one, subtract it from sum.
    if (i < s.length - 1 && val[s[i]] < val[s[i + 1]]) {
      sum -= val[s[i]];
    } else {
      sum += val[s[i]];
    }
  }

  return sum;
};

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

var romanToInt1 = function (s) {
  const val = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  s = [...s];
  let i = 0;
  while (i < s.length) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V") {
          sum = sum + 4;
          i = i + 2;
        } else if (s[i + 1] === "X") {
          sum = sum + 9;
          i = i + 2;
        } else {
          sum = sum + val[s[i]];
          i++;
        }
        break;
      case "X":
        if (s[i + 1] === "L") {
          sum = sum + 40;
          i = i + 2;
        } else if (s[i + 1] === "C") {
          sum = sum + 90;
          i = i + 2;
        } else {
          sum = sum + val[s[i]];
          i++;
        }
        break;
      case "C":
        if (s[i + 1] === "D") {
          sum = sum + 400;
          i = i + 2;
        } else if (s[i + 1] === "M") {
          sum = sum + 900;
          i = i + 2;
        } else {
          sum = sum + val[s[i]];
          i++;
        }
        break;
      default:
        sum = sum + val[s[i]];
        i++;
        break;
    }
  }
  return sum;
};

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/
