// //Case 1:  Call -> borrowing a function from another object
let name = {
  firstname: "Gokul",
  lastname: "janardhanan",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.printFullName(); // Gokul janardhanan

let name2 = {
  firstname: "Surya",
  lastname: "b p",
};

name.printFullName.call(name2); // Surya b p

//Case 2: Call -> borrowing a normal function
let name3 = {
  firstname: "Gokul",
  lastname: "janardhanan",
};

const printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName.call(name3, ["Banglore", "Karnataka"]); // Gokul janardhanan

let name4 = {
  firstname: "Surya",
  lastname: "b p",
};

printFullName.call(name4, ["Chennai", "Tamilnadu"]); // Surya b p

//Case 3: Apply -> borrowing a normal function
let name5 = {
  firstname: "Gokul",
  lastname: "janardhanan",
};

const printFullName5 = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName5.apply(name5, ["Banglore", "Karnataka"]); // Gokul janardhanan from Banglore, Karnataka

let name6 = {
  firstname: "Surya",
  lastname: "b p",
};

printFullName5.apply(name6, ["Chennai", "Tamilnadu"]); // Surya b p from Chennai, Tamilnadu

//Case 4: Bind -> borrowing a normal function
let name7 = {
  firstname: "Gokul",
  lastname: "janardhanan",
};

const printFullName7 = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

const newFn = printFullName7.bind(name7, "Banglore", "Karnataka");
newFn();

let name8 = {
  firstname: "Surya",
  lastname: "b p",
};

const newFn1 = printFullName7.bind(name8, "Chennai", "Tamilnadu");
newFn1();
