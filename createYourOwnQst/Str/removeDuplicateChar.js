// Remove duplicate characters

let str = "hello javascript";
function removeDuplicateChar(str) {
  let newStr = str.toLowerCase().split("");

  return newStr.filter((ele, index) => newStr.indexOf(ele) === index).join("");
}

console.log(removeDuplicateChar(str));
