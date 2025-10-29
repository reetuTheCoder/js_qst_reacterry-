// Check if two strings are anagrams

let str1 ="listen";
let str2 = "silent"

function isAnagrans(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log(isAnagrans(str1, str2));
