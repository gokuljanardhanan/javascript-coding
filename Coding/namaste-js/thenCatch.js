// Case 1: handling promise with then/catch
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data");
  }, 1000);
});
const data = p
  .then((res) => {
    console.log(res); // Data
    return res;
  })
  .catch((error) => {
    console.log(error);
  });

// Case 2: handling promise with then/catch
function getValue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data");
    }, 1000);
  });
}
const data2 = getValue();
console.log(data2); // Promise { <pending>, 'Data' }
data2
  .then((res) => {
    console.log(res); // Data
    return res;
  })
  .catch((error) => {
    console.log(error);
  });

// Case 3: handling promise with then/catch with async function returns non-promise
async function getDataNonPromise() {
  return "Data"; // return Promise.resolve("Data");
}

const data3 = getDataNonPromise();
console.log(data3); // Promise { <pending>, 'Data' }

data3
  .then((res) => {
    console.log(res); // Data
  })
  .catch((error) => {
    console.log(error);
  });

// Case 4: handling promise with then/catch with async function returns promise
async function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data");
    }, 1000);
  });
}

const data4 = getDataPromise();
console.log(data4); // Promise { <pending>, 'Data' }

data4
  .then((res) => {
    console.log(res); // Data
  })
  .catch((error) => {
    console.log(error);
  });
