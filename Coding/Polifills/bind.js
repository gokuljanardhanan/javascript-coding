Function.prototype.customBind = function (obj, ...args) {
  const fn = this;
  return function (...secondArgs) {
    return fn.call(obj, ...args, ...secondArgs);
    // return fn.apply(obj, [...args, ...secondArgs]);
  };
};

function printName(state, city, village) {
  const res = `Hi ${this.firstname} from ${state}, ${city} ${village}`;
  console.log(res);
  return res;
}

const ob = {
  firstname: "Goku",
};

const newFn = printName.customBind(ob, "Kerala", "Champad");
const out = newFn("Panniannore");
console.log(out);
