// 1. Reverse a string

let str = "hello";

console.log(str.split("").reverse().join(""));

function strReve(str) {
  let output = "";

  for (let i = 0; i < str.length - 1; i--) {
    output += str[i];
  }

  return output;
}
console.log(strReve(str));

function strReve(str) {
  let output = "";

  for (const char of str) {
    output = char + output;
  }

  return output;
}
console.log(strReve(str));
