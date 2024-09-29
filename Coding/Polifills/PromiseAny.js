// Takes array of promises
/* Returns a single promise that resolves as soon as any of the promises in the 
array resolves or rejects if all of the promises reject. */

function customAny(promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      throw new TypeError("Argument must be an array");
    }

    const errors = [];
    let rejectedPromises = 0;

    if (promiseArr.length === 0) {
      reject(new AggregateError(errors, "All promises were rejected"));
      return;
    }

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          errors[index] = error;
          rejectedPromises++;
          if (rejectedPromises === promiseArr.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

// Usage example:
(async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
      console.log("promise1", 1);
    }, 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
      console.log("promise2", 2);
    }, 1000);
  });

  try {
    const resp1 = await customAny([promise1, promise2]);
    console.log("FINAL OUTPUT", resp1);
  } catch (e) {
    console.log("ERROR", e);
  }
})();
