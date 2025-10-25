//Count words in sentence

let str = "JavaScript is fun ";

function countWord(str) {
  return str.trim().split(" ").length;
}
// console.log(countWord(str));

function countWord(str) {
  let count = 0;
  let newStr = str.trim().split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== "") {
      count++;
    }
  }
  return count;
}
console.log(countWord(str));
