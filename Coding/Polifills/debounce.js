const myFunc = (name) => {
  console.log(`myFunc Called with name ${name}`);
};

const debounce = (myFunc, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      myFunc.apply(this, args);
    }, timeout);
  };
};

const debouncedFn = debounce(myFunc, 2000);

debouncedFn("Gokul1");
debouncedFn("Gokul2");
debouncedFn("Gokul3");
setTimeout(() => {
  debouncedFn("Gokul4");
}, 1000);
