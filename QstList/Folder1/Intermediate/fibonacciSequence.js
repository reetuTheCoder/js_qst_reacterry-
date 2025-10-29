let arr = ["apple", "banana", "pear", "banana", "orange", "apple"];

// console.log(arr);
let newArr = arr.slice();
// console.log(newArr);

// function sortStr(arr) {
//   arr.forEach((element, index) => {
//     let splitStr = element.split("").sort().join("");

//     newArr[index] = splitStr;
//     // console.log(splitStr);
//     // console.log(index);
//   });
//   return newArr;
// }

// console.log(sortStr(newArr));

// function sortStr(arr) {
//   return arr.map((ele) => {
//     let splitStr = ele.split("").sort().join("");
//     // console.log(splitStr);
//     return splitStr;
//   });
// }

// console.log(sortStr(newArr));

//long way
function sortStr(str) {
  // console.log(str);

  let arr = str.split("");
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log("jjj", j);
      if (arr[i] > arr[j]) {
        // console.log("arr[i] > arr[j]", arr[i] > arr[j]);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr.join("");
}

let sortedArr = arr.map((word) => sortStr(word));

// console.log(sortedArr);

// Fibonacci sequence array

let num = 100;
let x = 0;
let y = 1;

let fn = x + y;
console.log("fn value", fn);

while (fn < num) {
  fn = x + y;
  // console.log(fn);
  x = y;
  y = fn;
}

// when you don’t know how many numbers you need to generate a Fibonacci sequence follow while loop
function fibonacciArr(max) {
let arr = [0, 1];
  let next = arr[0] + arr[1];

  while (next < max) {
    arr.push(next);
    next = arr[arr.length - 1] + arr[arr.length - 2];
  }

  return arr;
}

console.log(fibonacciArr(100));

// when you want to generate a Fibonacci sequence for exactly n numbers follow for loop
function fibonacciArr(n) {
   if (n === 0) return [];
  if (n === 1) return [0];

  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    let next = arr[i - 1] + arr[i - 2];
    arr.push(next);
  }

  return arr;
}

console.log(fibonacciArr(10));
