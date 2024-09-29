Function.prototype.customApply = function (obj, args) {
  return this.call(obj, ...args);
};

function printName(state, city) {
  console.log(`Hi ${this.firstname} from ${state}, ${city}`);
}

const ob = {
  firstname: "Goku",
};

printName.customApply(ob, ["Kerala", "Champad"]); // Output: Hi Goku from Kerala, Champad
