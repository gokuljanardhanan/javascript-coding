function customAll(promiseArr) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises += 1;
          if (completedPromises === promiseArr.length) {
            resolve(results);
          }
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
      resolve(2);
      console.log("promise2", 2);
    }, 1000);
  });

  try {
    const resp1 = await customAll([promise1, promise2]);
    console.log("FINAL OUTPUT", resp1);
  } catch (e) {
    console.log("ERROR ", e);
  }
})();
