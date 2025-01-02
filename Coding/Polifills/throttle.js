const myFunc = (name) => {
  console.log(`myFunc Called with name ${name}`);
};

const throttle = (myFunc, timeout) => {
  let flag = true;
  return (...args) => {
    if (flag) {
      flag = false;
      myFunc.apply(this, args);
      timer = setTimeout(() => {
        flag = true;
      }, timeout);
    }
  };
};

const throttledFn = throttle(myFunc, 2000);

throttledFn("Gokul1");
throttledFn("Gokul2");
throttledFn("Gokul3");
setTimeout(() => {
  throttledFn("Gokul4");
}, 5000);
