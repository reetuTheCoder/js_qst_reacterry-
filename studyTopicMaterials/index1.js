// what is new add()
// A add is a collection of unique values (no duplicates allowed).
// new Set() does not allow key–value pairs.

// Key Points:
// Only stores unique values.
// Values can be of any type.
// Maintains insertion order.
// Has built-in methods like .add(), .delete(), .has(), .size.


let mySet = new Set();

console.log(mySet);

mySet.add(1);
mySet.add(5);
mySet.add(1); // Duplicate, ignored
mySet.add('Hello');



console.log(mySet);
