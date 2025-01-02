function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const clonedObj = {};
  for (const key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}

// Example Usage:
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // { a: 1, b: { c: 2 } }
