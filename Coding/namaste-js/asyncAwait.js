// Case 1: async/await with promise
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data");
  }, 1000);
});

async function getData() {
  const data = await prom;
  console.log(data); // Data
}

// Case 1: async/await console.log
const promiseOne = new Promise((resolve, reject) => {
  console.log("promiseOne timer start");
  setTimeout(() => {
    console.log("resultOne resolving");
    resolve("ResultOne");
  }, 10000);
});

const promiseTwo = new Promise((resolve, reject) => {
  console.log("promiseTwo timer start");
  setTimeout(() => {
    console.log("resultTwo resolving");
    resolve("ResultTwo");
  }, 5000);
});

async function fetchData() {
  try {
    console.log("before await promiseOne");
    const resultOne = await promiseOne;
    console.log("after await promiseOne");
    console.log(resultOne);
    console.log("before await promiseTwo");
    const resultTwo = await promiseTwo;
    console.log("after await promiseTwo");
    console.log(resultTwo);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
console.log("Hello Gokul");

/*
promiseOne timer start
promiseTwo timer start
before await promiseOne
Hello Gokul
resultTwo resolving
resultOne resolving
after await promiseOne
ResultOne
before await promiseTwo
after await promiseTwo
ResultTwo
*/
