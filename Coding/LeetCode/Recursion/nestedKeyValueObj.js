//Time Complexity: O(n) (where n is the total number of keys in the object).
//Space Complexity: O(d) (where d is the depth of the object).
const deeper = (obj, key) => {
  for (let myKey in obj) {
    if (obj.hasOwnProperty(myKey)) {
      if (myKey === key) {
        return obj[myKey]; // Use myKey to access the value
      } else if (typeof obj[myKey] === "object" && obj[myKey] !== null) {
        const out = deeper(obj[myKey], key);
        if (out !== undefined) {
          // Ensure falsy values like 0 or "" are returned correctly
          return out;
        }
      }
    }
  }
  return undefined;
};

const data = {
  a: 1,
  b: {
    c: {
      d: 4,
      e: null,
    },
    f: 0,
  },
  g: "hello",
};

console.log(deeper(data, "d")); // Output: 4
console.log(deeper(data, "f")); // Output: 0
console.log(deeper(data, "e")); // Output: null
console.log(deeper(data, "z")); // Output: undefined

/*
Write a function which returns the value of a key in an object, undefined if not found
*/
