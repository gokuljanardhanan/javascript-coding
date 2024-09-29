//Question 2
const inputStr = "a, b.";

const reverseString = (str) => {
  let newStr = str;
  newStr = newStr.trim();
  let newStrArr = newStr.split(" ");
  let charMem = {};
  newStrArr.forEach((element, index) => {
    if (element === "." || element === ",") {
      charMem[index] = element;
    }
  });
  const length = newStrArr.length;
  console.log("charMem1", charMem, length);
  newStrArr = newStrArr
    .filter((el) => el !== "" && el !== "," && el !== ".")
    .reverse();
  console.log("newStrArr1", newStrArr);
  let tempArr = [];
  for (let i = 0; i < length; i++) {
    if (charMem[i]) {
      tempArr.push(charMem[i]);
      if (newStrArr[i]) {
        tempArr.push(newStrArr[i]);
      }
    } else if (newStrArr[i]) {
      tempArr.push(newStrArr[i]);
    }
  }
  console.log("tempArr", tempArr);
  tempArr = tempArr.join(" ");
  console.log("final", tempArr);

  return newStrArr;
};

console.log(reverseString(inputStr));
