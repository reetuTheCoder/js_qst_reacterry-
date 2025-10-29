// Check palindrome

let str = "level";

// function isPalindromStr(str) {
//   let reverseStr = str.split("").reverse().join("");

//   return str === reverseStr;
// }
// console.log(isPalindromStr(str));

// function isPalindromStr(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindromStr(str));

function isPalindromStr(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output === str;
}
console.log(isPalindromStr(str));

let arr = [1, 2, 3, 2, 1, 4];
function isPalindromArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindromArr(arr));

// Capitalize first letter of each word

let str1 = "hey reetu!";

function capitalizeFirstLetter(str) {
  let strArr = str.split(" ");
  return strArr
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter(str1));

// /Check anagrams
let str2 = "listen";
let str3 = "silent";

function isAnagramsStr(str2, str3) {
  if (str2.length !== str3.length) {
    return false;
  }
  return str2.split("").sort().join("") === str3.split("").sort().join("");
}
console.log(isAnagramsStr(str2, str3));

// Find longest word in sentence
// imp both
const sentence =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development .";

function findLongestWord(str) {
  let strArr = str
    .split(" ")
    .map((word) => word.replace(/[^\w]/g, "").trim())
    .filter(Boolean);
  let longestWord = "";

  for (const word of strArr) {
    // console.log("word", word);

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// console.log(findLongestWord(str1));
// console.log(findLongestWord(sentence));

function findLongestWord1(str) {
  let strArr = str
    .split(" ")
    .map((word) => word.replace(/[^\w]/g, "").trim())
    .filter(Boolean);
  // console.log(strArr);

  return strArr.reduce((longestWord, curVal) =>
    longestWord.length > curVal.length ? longestWord : curVal
  );
}

// console.log(findLongestWord1(sentence));

// Common elements between arrays

let arr1 = [1, 2, 3, 4];
let arr2 = [4, 2, 5, 6];

// function commonEleArr(arr1, arr2) {
//    return arr1.filter((num)=> arr2.includes(num))
// }

// console.log(commonEleArr(arr1, arr2));

let arr3 = [2, 4, 7];
let arr4 = [2, 8, 4, 3];

// if you have more then two array

function commonEleArr(...array) {
  return array.reduce((acc, cuVal) => acc.filter((ele) => cuVal.includes(ele)));
}

console.log(commonEleArr(arr1, arr2, arr3, arr4));

// Flatten nested array

let newArr = [1, [[2], [3, 4], 5], 6];

function flatArray(arr) {
  return arr.flat(Infinity);
}

console.log(flatArray(newArr));

/// Find second largest number

function secondLarge(arr) {
  let firstL = -Infinity;
  let secondL = -Infinity;

  for (const num of arr) {
    // [ 2, 8, 4, 3 ] arr
    if (num > firstL) {
      console.log(num, "num", firstL);

      secondL = firstL;
      firstL = num;
    } else if (num > secondL && num < firstL) {
      // console.log(num,"gfjjf", secondL, firstL);

      secondL = num;
    }
  }

  return secondL;
}
console.log(secondLarge(arr4));

// Rotate array k times (right)


function rotateArr(arr, k) {
  k = k % arr.length;

  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

console.log(rotateArr(arr4, 2));
