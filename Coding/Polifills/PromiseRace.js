// Takes array of promises
/* Returns a promise that resolves or rejects as soon as any of the promises in the array resolves or rejects. */

function customRace(promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      throw new TypeError("Argument must be an array");
    }

    if (promiseArr.length === 0) {
      // If there are no promises, the behavior isn't specified, but we can reject or resolve with undefined.
      resolve(undefined); // or reject(new TypeError('No promises to race'));
      return;
    }

    promiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// Usage example:
(async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
      console.log("promise1", 1);
    }, 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
      console.log("promise2", 2);
    }, 500);
  });

  try {
    const resp1 = await customRace([promise1, promise2]);
    console.log("FINAL OUTPUT", resp1);
  } catch (e) {
    console.log("ERROR", e);
  }
})();
