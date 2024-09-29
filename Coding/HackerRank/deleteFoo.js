/*
 delete foo property from obj if it is present in obj
 */

function createObject(s) {
  this.foo = s;
}
const obj1 = new createObject();
const obj = Object.create({
  foo: s,
});

function deleteFoo(obj) {
  if (obj.hasOwnProperty("foo")) {
    delete obj.foo;
  } else if ("foo" in obj) {
    delete Object.getPrototypeOf(obj).foo;
  }
}
