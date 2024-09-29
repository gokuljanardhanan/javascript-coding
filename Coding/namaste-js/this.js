"use strict";

//Case 1: this in global space
console.log(this); // window object: Global object: in browser : window, in node: global
console.log(this === window); // true

//Case 2: this in function
function myFunc() {
  console.log(this);
}

myFunc(); // undefined: in strict mode
// Exception: In non-strict mode, this will be window object
window.myFunc(); // window object : the object that calls the function

//Case 3: this inside object’s method
const obj = {
  name: "Gokul",
  getName: function () {
    console.log(this);
  },
};
obj.getName(); // {name: "Gokul", getName: ƒ}

//Case 4: this with call, apply, bind (sharing method between objects)
const obj2 = {
  name: "Gokul",
  getName: function () {
    console.log(this);
  },
};

const obj3 = { name: "Surya" };

obj2.getName.call(obj3); // {name: "Surya"}

//Case 5: this inside arrow function
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

//Case 6: this inside DOM

document.querySelector("button").addEventListener("click", function () {
  console.log(this); // button element
});
