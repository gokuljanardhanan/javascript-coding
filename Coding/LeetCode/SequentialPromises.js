Promise.customSeq = function (arr) {
  return new Promise((res, rej) => {
    let currIndex = 0;
    const out = [];

    function seq() {
      if (currIndex < arr.length) {
        Promise.resolve(arr[currIndex])
          .then((resp) => {
            console.log("resp", resp);
            out.push(resp);
            currIndex++;
            return seq(); // Continue to the next promise
          })
          .catch((err) => {
            rej(err); // Reject immediately on error
          });
      } else {
        res(out); // Resolve with all responses once done
      }
    }

    seq(); // Start the sequence
  });
};

(async () => {
  let prom1 = new Promise((res, rej) => {
    console.log("init prom1");
    setTimeout(() => {
      console.log("resolved prom1");
      res("Gokul");
    }, 5000);
  });

  let prom2 = new Promise((res, rej) => {
    console.log("init prom2");
    setTimeout(() => {
      console.log("resolved prom2");
      res("Surya");
    }, 8000);
  });

  try {
    const final = await Promise.customSeq([prom1, prom2]);
    console.log("FINAL", final); // Logs: ['Gokul', 'Surya']
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();

//Check with Adarsh : When api call/Promise start processing (while calling Promise.any or Promise.seq) , only processing is done in loop or sequentially in polifyll
