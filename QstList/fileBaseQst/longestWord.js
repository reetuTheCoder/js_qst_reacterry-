let str = "I love programming";


function longestWord(str) {
  let maxLength = Math.max(...str.split(" ").map((word) => word.length));
  return str.split(" ").filter((word) => word.length === maxLength);
}

// console.log(longestWord(str));



function longestWord(str) {
 return str.split(" ").reduce((acc, val)=> val.length > acc.length ? val : acc) 
}

console.log(longestWord(str));