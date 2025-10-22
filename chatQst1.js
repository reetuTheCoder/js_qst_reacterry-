let x = "5";
let y = 2;
console.log(x + y); // 52



console.log(5 == "5");  // true
console.log(5 === "5"); // false



const arr = [10, 20, 30, 40, 50];
console.log(arr[arr.length - 1]);  // 50


let a = 10;
function test() {
  let a = 5;
  console.log(a);  // 5
}
test();
console.log(a); // 10


if (0) console.log("Zero is truthy");
else console.log("Zero is falsy");   // it will print


const person = { name: "Reetu", age: 25 };
console.log(person["name"]);
console.log(person.name); // second way



const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);  // apple, banana, cherry
}



function add(a, b = 3) {
  return a + b;
}
console.log(add(5)); //8 
