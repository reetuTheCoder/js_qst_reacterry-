let str1 = "listen";
let str2 = "silent";

// function isAnagrams(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(isAnagrams(str1, str2));

function isAnagrams(str1, str2) {
  let freq = {};
  for (const char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!freq[char]) {
      return false;
    } else {
      freq[char]--;
    }
  }
  return true;
}

console.log(isAnagrams(str1, str2));
