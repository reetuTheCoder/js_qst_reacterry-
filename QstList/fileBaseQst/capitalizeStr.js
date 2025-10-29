// 4. Capitalize first letter of each word

let str = "hello world";

function capitalizeStr(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
// console.log(capitalizeStr(str));


function capitalizeStr(str) {
 return  str.replace(/\b\w/g, word => word.toUpperCase())
}
console.log(capitalizeStr(str));
