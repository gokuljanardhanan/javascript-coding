(function (global) {
  if (global.Promise) return; // If Promise is already supported, no need for polyfill

  function Promise(executor) {
    let onResolve = null;
    let onReject = null;
    let isFulfilled = false;
    let isRejected = false;
    let value = null;

    this.then = function (callback) {
      onResolve = callback;
      if (isFulfilled) {
        onResolve(value);
      }
      return this; // Enable chaining
    };

    this.catch = function (callback) {
      onReject = callback;
      if (isRejected) {
        onReject(value);
      }
      return this; // Enable chaining
    };

    function resolve(val) {
      isFulfilled = true;
      value = val;
      if (onResolve) {
        onResolve(value);
      }
    }

    function reject(val) {
      isRejected = true;
      value = val;
      if (onReject) {
        onReject(value);
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  global.Promise = Promise;
})(this);
