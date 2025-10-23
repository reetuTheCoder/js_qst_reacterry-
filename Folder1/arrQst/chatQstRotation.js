// Right rotation by 1

let arr = [1, 2, 3, 4, 5];

function rotateRightBY1(arr) {
  arr.unshift(arr.pop());
  return arr;
}
// console.log(rotateRightBY1(arr));

function rotateLeftBY1(arr) {
  arr.push(arr.shift());
  return arr;
}
// console.log(rotateLeftBY1(arr));

let arr1 = [10, 20, 30, 40, 50];

function rotateRightByK(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
// console.log(rotateRightByK(arr, 7));

// function rotateLeftByK(arr, k) {
//   k = k % arr.length;
//   return arr.slice(k).concat(arr.slice(0, k));
// }
// console.log(rotateLeftByK(arr1, 2));

let str = "abcdef";

function rotateStrRightByK(str, k) {
  let splitStr = str.split("");
  k = k % splitStr.length;
  let rotatedVal = splitStr
    .slice(-k)
    .concat(splitStr.slice(0, splitStr.length - k));
  return rotatedVal.join("");
}
console.log(rotateStrRightByK(str, 2));
