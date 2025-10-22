const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

console.log(arr1.concat(arr2));

console.log([...arr1, ...arr2]);

// arr1.push(...arr2);

// console.log(arr1);

for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}

console.log(arr1);

// Find words starting with a letter
const words = ["apple", "banana", "apricot", "cherry"];

// function startWordA(arr) {
//   return arr.filter((word)=> word.startsWith("a"))
// }

// console.log(startWordA(words));

// function startWordA(arr) {
//   let output = [];

//   for (const char of arr) {
//     if (char[0] == "a") {
//       output.push(char);
//     }
//   }

//   return output;
// }

// console.log(startWordA(words));

function startWordA(arr) {
  let output = [];

  arr.forEach((element) => {
    if (element.charAt(0) === "a") {
      console.log(element);
      output.push(element);
    }
  });

  return output;
}

// console.log("fsdfj", startWordA(words));

// Convert first letter to uppercase
const str = "hello world";

// function convertFirst(str) {
//   return str.split(" ").map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1)).join(" ");;
// }

// console.log("fsdfj", convertFirst(str));

function convertFirst(str) {
  let newstr = str.split(" ");
  // console.log(newstr);

  let output = [];

  newstr.forEach((ele) => {
    output.push(ele[0].toUpperCase() + ele.slice(1));
  });

  return output.join(" ");
}

console.log("fsdfj", convertFirst(str));
