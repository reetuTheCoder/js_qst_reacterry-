// function isPalindrome(str) {
//   let output = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     output += str[i];
//   }

//   return output === str;
// }

// console.log(isPalindrome("hello"));

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true
}

console.log(isPalindrome("hello"));
