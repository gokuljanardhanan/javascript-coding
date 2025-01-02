// Time complexity : O(F) where F is the time complexity of fn
// Space complexity : O(1)
function modifiedFunction(fn, count = 3, timeout = 1500) {
  let remainingCount = count;
  let timer = null;

  return function (...args) {
    if (timer) {
      console.error(`Operation unavailable, try after ${timeout}ms`);
      return "Operation unavailable, try after timeout";
    }

    try {
      if (remainingCount > 0) {
        const result = fn.apply(this, args);
        remainingCount = count; // Reset error count on success
        return result;
      } else {
        throw new Error(`Operation unavailable, try after ${timeout}ms`);
      }
    } catch (err) {
      console.error(err.message);
      remainingCount--;

      if (remainingCount === 0 && !timer) {
        timer = setTimeout(() => {
          remainingCount = count;
          clearTimeout(timer); // Clear the timeout
          timer = null; // Reset the timer reference
        }, timeout);
      }

      return "Error msg";
    }
  };
}

// Test function that throws an error for demonstration
function add(a, b) {
  if (a < 0) {
    throw new Error("Error FROM ADD");
  }

  return a + b;
}

const myNewFunction = modifiedFunction(add);

async function main() {
  console.log(myNewFunction(-1, 5)); // Error
  console.log(myNewFunction(-1, 5)); // Error
  console.log(myNewFunction(-1, 5)); // Error
  console.log(myNewFunction(-1, 5)); // "Operation unavailable, try after timeout"

  console.log(myNewFunction(1, 5)); // "Operation unavailable, try after timeout"
  console.log(myNewFunction(-1, 5)); // "Operation unavailable, try after timeout"

  await sleep(2000);

  console.log(myNewFunction(1, 5)); // 6

  console.log(myNewFunction(-1, 5)); // Error
  console.log(myNewFunction(-1, 5)); // Error
}

function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Start execution
(async () => {
  await main();
})();

/*
Implement a function that returns a new function with the following behavior:
1.The returned function executes the original function and tracks consecutive error throws.
2.After the specified timeout period has passed, the function should be allowed to execute again (freeze).
3.If the consecutive error throw count exceeds a specified threshold (count), your function is freezed till the timeout as mentioned above and on the next run, it should log the error Timeout: ' Operation unavailable, try after {timeout}ms' seconds to the console and prevent further execution of the function.
This mechanism is intended to prevent the function from being called an unnecessary number of times when the failure count has already reached the threshold. Optional: Can you identify what design pattern is this?

Parameters:
fn: The original function to be executed.
count: The threshold of consecutive errors allowed.
timeout: The time period (in milliseconds) to wait before allowing the function to execute again after the error threshold is reached.

Task: Complete the implementation of modifiedFunction such that it adheres to the specified behavior.
*/
