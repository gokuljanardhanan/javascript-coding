// Takes array of promises
// Returns a promise with array of resolved and rejected promises
// [{ status: 'rejected', reason: 1 },{ status: 'fulfilled', value: 2 }]

function customAllSettled(promiseArr) {
  return new Promise((resolve) => {
    if (!Array.isArray(promiseArr)) {
      throw new TypeError("Argument must be an array");
    }

    const results = [];
    let completedPromises = 0;

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completedPromises++;
          if (completedPromises === promiseArr.length) {
            resolve(results);
          }
        });
    });

    // Handle empty array
    if (promiseArr.length === 0) {
      resolve(results);
    }
  });
}

// Usage example:
(async () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
      console.log("promise1", 1);
    }, 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
      console.log("promise2", 2);
    }, 1000);
  });

  try {
    const resp1 = await customAllSettled([promise1, promise2]);
    console.log("FINAL OUTPUT", resp1);
  } catch (e) {
    console.log("ERROR", e);
  }
})();
