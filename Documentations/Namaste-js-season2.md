1. Callback hell
   Callbacks are very important in js, which makes asynchronous operation possible, pass a function as callback and execute later once asynchronous operation is completed.
   Callback hell: In the below example, once createCart is successful, the callback we passed will execute and proceedTopayment executes once that is completed we again pass another callback function, this will lead to callback hell, passing callbacks nested.

appId.createCart(cartObj, ()=>{
api.proceedTopayment(pay, ()=>{
})
})

Inversion of control : We are calling some external function and passing our piece of code as a callback and asking them to execute once some async operation/task is completed. Here we lose the control, and even they may fail to execute the callback function. This is called inversion of control, control passed to external function.

2. Promises

To solve callback hell and inversion of control we can use promise.
In JavaScript, a Promise is a built-in object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a way to work with asynchronous code more effectively, handling operations like data fetching, file reading, or timer-based tasks.

In the example below, the user first will have a value of undefined in memory allocation phase, then when fetch is called, A promise object with state=pending and result:undefined is assigned until the asynchronous operation completes. Once completed the state will change to fulfilled and the data is set in result
Possible promise states are : pending, fulfilled, rejected
Promise solves the inversion of control issue as well, instead of function calling the callback passed, we can call .then on promise which will execute once promise fulfilled, and catch on rejected. This is guaranteed by the js engine. When passing callback and executing we cannot guarantee.
Immutable: The data in the promise response is immutable, we can't modify the data.
const url = “”;
const user = fetch(url);

Inversion of control and code growing horizontally can be solved with promise like below code,Now the code will be linear, this is called promise chain, returning inside callback.
api.createCart(cartObj).then(() => {
return api.proceedTopayment(pay);
}).then(() => {
});

3.Creating a Promise, Chaining & Error Handling
A promise can be created with the help of the Promise constructor function, we have to pass a callback method as a parameter, which will have access to resolve and reject methods.

- When we call a function which will return a promise, until this is resolved the value of variable promise will be Promise {<pending>}, which means, promise is in pending state, once promise fulfilled/rejected(settled), Js engine will execute the callback passed in then or catch accordingly.
- until the promise is settled, both callbacks will be in web api env, once it is settled, the corresponding callback will be pushed to MS Queue. Event loop push to call stack once its empty.
  const cart = ["shoes", "pants"];
  const promise = createCart(cart);
  console.log(promise); // Promise {<pending>}

promise
.then((orderId) => {
console.log(orderId); // 12
})
.catch((error) => {
console.log(error); // Cart is empty
});

function createCart(cart) {
return new Promise((resolve, reject) => {
if (!validateCart(cart)) {
reject(new Error("Cart is empty"));
}
const orderId = 12;
setTimeout(() => {
resolve(orderId);
}, 1000);
});
}

function validateCart(cart) {
return cart.length !== 0;
}

Promise chaining:
We can chain promises, and attach a catch block, if anything in the chain fails, it will catch in the catch block.

- when chaining a promise, in the then block we need to either return a value or promise which will resolve,In the next block callback the returned value or fulfilled promise data passed as parameter.
- When we return a promise inside then block, we don't need to write other then block on promise return, instead promise is created in a way we can chain in linear way to avoid callback hell(horizontal grow).
  const cart = ["shoes", "pants"];
  const promise = createCart(cart);
  console.log(promise); // Promise {<pending>}

promise
.then((orderId) => {
console.log(orderId); // 12
return orderId;
})
.then((ordId) => {
console.log(ordId); // 12
return proceedToPayment(ordId);
})
.then((paymentId) => {
console.log(paymentId); // 34
return proceedToPayment(paymentId);
})
.catch((error) => {
console.log(error); // Cart is empty
});

function createCart(cart) {
return new Promise((resolve, reject) => {
if (!validateCart(cart)) {
reject(new Error("Cart is empty"));
}
const orderId = 12;
setTimeout(() => {
resolve(orderId);
}, 1000);
});
}

function validateCart(cart) {
return cart.length !== 0;
}
function proceedToPayment(orderId) {
return new Promise((resolve, reject) => {
const paymentId = 34;
setTimeout(() => {
resolve(paymentId);
}, 1000);
});
}

- Catch in above examples will run if any of the above promise chain fails. For eg: createCart failed,it will execute catch. But if there are scenarios even if cart api fails, we need to continue with the rest of the promise chain. We need to add a separate catch block for createCart.
- Catch block will execute for all the promise chain above, if any specific catch is added, it wont catch in common catch below.
- In the below example, if createCart fails it will catch in its own catch block, not in common catch, and continue executing the rest of the blocks.
- catch is used to gracefully handle errors, to avoid throwing in browsers.
- In case of a promise we attach callback methods(which is more trustable), but in the callback we are passing a function and asking a third party to execute.
  promise
  .then((orderId) => {
  console.log(orderId); // 12
  return orderId;
  })
  .catch((error) => {
  console.log(error); // Catch specifically added for createCart to continue running promise chain below
  });
  .then((ordId) => {
  console.log(‘No matter what happened, this will run’); // 12
  })
  .catch((error) => {
  console.log(error); // Any error in promise chain, common catch
  });

  4.async await
  Async await is used to handle promises.
  The previous way of handling promise was then/catch
  async function getData() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve("Data");
  }, 1000);
  });
  }
  getData().then((res) => {
  console.log(res); // Data
  });

What is async:
Async functions will always return a promise. Using the keyword async we can make any function async
Even if we are returning a non promise, eg: string or number, it will wrap the string with a promise and return from function.It will be fulfilled and result will be the string returned.Now either with then/catch callback get the data returned or with await.
If the async function returns a promise, it will return directly without wrapping.And with proper status and data in result. With then/catch or await get the returned value.
async function getData() {
return "Data";
}
const data = getData();
console.log(data); // Promise { 'Data' }

What is await:
How async await works:
Examples of using async await:
Await can only be used inside async function
Await written in front of a promise and it resolves the promise

const prom = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Data");
}, 1000);
});

async function getData() {
const data = await prom;
console.log(data); // Data
}

-Await will wait in the async function and execute the rest of the lines in the async function after successfully resolving the promise.But js wont stop execution it will continue with rest of the tasks.

- In the below example first memory allocation for promiseone, promisetwo and function fetchData.
- In code execution phase, promiseone starts execution and starts timer, and move settimeout callback to web api and waits for timer to complete, same happens in promiseTwo
- A new EC created for fetchData function,seeing await operation, it will not execute rest of the lines in function it terminates it from callstack, fetchdata removed from call stack
- continue with other execution (‘Hellow gokul’) line executed in GEC.
- After promiseOne settled(10sec) eventloop again push fetchData to callstack and continue where it left in the function.
- Since both timer already started and promiseTwo has 5seconds timeout it already settled, it continue with promiseTwo resolving and complete function execution.
- If promiseTwo not settled(longer time than first promise) again terminates fetchData function execution and continue with rest of execution.And comeback once it is resolved.
  Important: Js engine doesn't wait in async function await statement it terminates function from call stack and continues executing GEC and other function EC(otherwise webpage will be freezed), and when call stack is empty and promise resolved again add back function to call stack and continue from where it left.
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
console.log("before await promiseOne");
const resultOne = await promiseOne;
console.log("after await promiseOne");
console.log(resultOne);
console.log("before await promiseTwo");
const resultTwo = await promiseTwo;
console.log("after await promiseTwo");
console.log(resultTwo);
}

fetchData();
console.log("Hello Gokul");

/_
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
ResultTwo _/

Error handling:
We can add await inside a try catch, any error will catch inside catch block
Or .catch method on the async method will also work
Async await vs promise .then/.catch
Async await is a syntactical sugar over then/catch.Behind the hood js is using then/catch
We can avoid the promise chain, we can add the logic after the await line instead of passing a callback.
Async/await is a new way of handling promises.

Fetch:
Fetch returns a promise with a body which is readable stream, to convert it to json, we need to call the .json() method.it will be again a promise.

const data = await fetch(API_URL);
await data.json(); // we can convert to string , text also

5.This keyword
this in global space: Global space is space which is outside of any function.Here the value of this is global object. In the case of a browser runtime environment it is a window object, but in the case of a node it is global.
If js is running in any other runtime value of this will be the global object of that runtime.
console.log(this) -> window for browser, global for node -> global object

this inside a function :
//The value will be dependent on strict or non strict mode.
console.log(this); undefined in strict mode, window in non strict mode,
Value of this keyword inside the function is undefined, but in non-strict mode due to this substitution, this will get the value of the global object which is window.
Value of this keyword depends on how a function is called.
function myFunc() {
console.log(this);
}
myFunc(); // undefined: in strict mode
// Exception: In non-strict mode, this will be window object
window.myFunc(); // window object : the object that calls the function

this inside object’s method :
Method : when a function is a part of an object it is called a method.
The value of this keyword inside an object’s method will be the object.
The value of this depends on the object we are calling.
//Case 3: this inside object’s method
const obj = {
name: "Gokul",
getName: function () {
console.log(this);
},
};
obj.getName(); // {name: "Gokul", getName: ƒ}

this with call, apply, bind (sharing method between objects) :
With Function borrowing we can call a method with a different object, and the value of this inside function will be the object we passed.
With the help of call method we can call a function and pass the value of this as parameter.
const obj2 = {
name: "Gokul",
getName: function () {
console.log(this);
},
};
const obj3 = { name: "Surya" };
obj2.getName.call(obj3); // {name: "Surya"}

this inside arrow function:
The value of this in case of arrow function depends on the enclosing lexical context.
Eg: if inside global space -> window, if enclosed in object -> object
Arrow function inside global space + inside normal function + object method -> window
Arrow function inside object method which is normal function -> object

const obj4 = {
name: "Gokul",
getName: () => {
console.log(this);
},
};
obj4.getName(); // window object: arrow function doesn’t have its own this, it takes this from its parent scope
const obj5 = {
name: "Gokul",
getName: function () {
const y = () => {
console.log(this);
};
y();
},
};
obj5.getName(); // { name: 'Gokul', getName: [Function: getName] }
function x() {
const y = () => {
console.log(this);
};
y();
}
x(); // window object

This inside dom:
The value of dom inside dom is the html element.

document.querySelector("button").addEventListener("click", function () {
console.log(this); // button element
});

document.querySelector("button").addEventListener("click", () => {
console.log(this); // window object
});
