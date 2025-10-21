// Check palindrome
const str2 = "mAdaMa";

// function ispalindromeStr(str) {
//   let lowerCs = str.toLowerCase();
//   let output = "";
//   for (let i = lowerCs.length - 1; i >= 0; i--) {
//     output += lowerCs[i];
//   }

//   if (output == lowerCs) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(ispalindromeStr(str2));

// function ispalindromeStr(str) {
//     let lowerCs = str.toLowerCase()
//   let output = ""
//   for (const char of lowerCs) {
//     output = char + output
//   }

//   if (output == lowerCs) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(ispalindromeStr(str2));

function ispalindromeStr(str) {
  let lowerCs = str.toLowerCase();
  let left = 0;
  let right = lowerCs.length - 1;

  while (left < right) {
    if (lowerCs[left] !== lowerCs[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(ispalindromeStr(str2));

// Find the longest word
const sentence = " I love JavaScript programming ";

// function longestWord(str) {
//   let splitWords = str.split(" ");

//   let longerChar = "";

//   for (const char of splitWords) {
//     if (char.length > longerChar.length) {
//       longerChar = char;
//     }
//   }
//   return longerChar;
// }

// console.log(longestWord(sentence));

function longestWord(str) {
  let splitWords = str.split(" ");
  //   console.log(splitWords);

  return splitWords.reduce((longerVal, currVal) =>
    longerVal.length > currVal.length ? longerVal : currVal
  );
}
console.log(longestWord(sentence));

function smallestWord(str) {
  let splitWords = str.split(" ").filter((word) => word !== "");
  //   console.log(splitWords);

  let smallest = splitWords[0];

  for (const char of splitWords) {
    if (char.length < smallest.length) {
      smallest = char;
    }
  }
  return smallest;
}

// console.log(smallestWord(sentence));

// Sum of array elements

const arr = [5, 10, 15, 20, 15];

// function sumElements(arr) {
//   return arr.reduce((acc, curr) => acc + curr);
// }

// console.log(sumElements(arr));

function sumElements(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }

  return count;
}

// console.log(sumElements(arr));

// Find max number in an array

const arr1 = [3, 8, 12, 5, 10, 30];

// function findMax(arr) {
//   let max = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(arr1));

// function findMin(arr) {
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(findMin(arr1));

function findMax(arr) {
  return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
}
console.log("eqwewr", findMax(arr1));



function findMin(arr) {
  return arr.reduce((acc, curr) => (acc > curr ? curr : acc)), arr[0];
}
console.log("fjdg", findMin(arr1));
