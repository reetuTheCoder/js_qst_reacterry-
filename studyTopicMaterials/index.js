// what is new Map()
// A Map is a collection of key-value pairs, similar to an object {}, but more powerful.
// Key Points:
// 1 Keys can be of any type (objects, numbers, strings, etc.).
// 2 Maintains the insertion order of elements.
// 3 Has built-in methods like .set(), .get(), .has(), .delete(), .size.

let myMap = new Map();

console.log(myMap);

// add somthing in the empty obj
myMap.set("name", "reetu");
myMap.set("id", 1);
myMap.set(1, "Number One");
myMap.set(true, "Boolean Key");

myMap.set("greet", function () {
  console.log(`Hello ${myMap.get("name")}`);
});

// console.log(myMap);
console.log(typeof myMap);
console.log(myMap instanceof Map);



// get somthing from the obj
console.log(myMap.get("greet")());
console.log(myMap.get("id"));
console.log(myMap.get(true));



// Check if a key exists
console.log(myMap.has("id"));
console.log(myMap.has("lastname"));


// Size of the map
console.log(myMap.size); 


// Delete a key
myMap.delete("id");
console.log(myMap.size); 
console.log(myMap.get("id"));


// Iterate over map
for (let [key, value] of myMap) {
    console.log(key, value);
}


myMap.set(1, "Number two"); // it will just update the key value did not add new key
console.log("myMap data", myMap);
