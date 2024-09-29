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
