/*
Js attach a prototype object to every object.Thats how we are able to access hidden properties and methods.
In js everything is an object. The prototype of an array is Array prototype and its parent prototype is object prototype. 
object prototype parent is null
*/

//Case 1: Array prototype
const arr = [1, 2, 3, 4];
//arr.length -> 4

//Case 3: Object prototype
const obj = { name: "John", age: 30 };
//obj.hasOwnProperty('name') -> true

//Case 3: Function prototype
function fun() {
  console.log("Hello");
}
// fun.name -> fun
