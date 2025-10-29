// Count frequency of each word
//Find the most frequent character
// Check if two strings are anagrams
// Find the first non-repeating character in a string
// Remove duplicate characters
// Check if a string is a palindrome
//Find all repeated words in a sentence
//Reverse only vowels in the string
//Check if string contains only unique characters
//Count total words, characters (with and without spaces)

let str = "Our modern world is unthinkable without softwarer";

function frequencyEachWord(str) {
  let strArr = str.split(" ");
  //   console.log(strArr);

  let freq = {};

  for (const word of strArr) {
    freq[word] = (freq[word] || 0) + 1;
  }

  return freq;
}
// console.log(frequencyEachWord(str));

// function mostFrequencyChar(str) {
//   let strArr = str.toLowerCase().split("");
// //   console.log(strArr);

//   let freq = {};
//   let maxChar = "";
//   let maxCount = 0;

//   for (const char of strArr) {
//     if (char !== " ") {
//       freq[char] = (freq[char] || 0) + 1;
//     }
//   }

//   for (const [char, count] of Object.entries(freq)) {
//     if (count > maxCount) {
//       maxChar = char;
//       maxCount = count;
//     }
//   }

//   return {mostFrequent: "o", count: 5 };
// }
// console.log(mostFrequencyChar(str));

function mostFrequencyChar(str) {
  let strArr = str.toLowerCase().split("");
  //   console.log(strArr);

  let freq = {};

  for (const char of strArr) {
    if (char !== " ") {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  //   let maximamCount = Object.values(freq)  // here we get all freq count
  let maximamCount = Math.max(...Object.values(freq));
  console.log("gdfgdfgj", maximamCount);

  let maxChar = Object.keys(freq).filter((char) => freq[char] === maximamCount);

  return { maxChar, count: maximamCount };
}
// console.log(mostFrequencyChar(str));

// function fundFirstNoneRepeatingChar(str) {
//   let freq = new Map();
//   // console.log(freq);

//   for (const char of str) {
//     freq.set(char, (freq.get(char) || 0) + 1);
//     // console.log(freq);
//   }

//   for (const char of str) {
//     if (freq.get(char) === 1) {
//       return char
//     }
//   }
//   return -1
// }
// let str1 = "helloheo"
// // console.log(fundFirstNoneRepeatingChar(str.toLowerCase()));
// console.log(fundFirstNoneRepeatingChar(str1.toLowerCase()));

function fundFirstNoneRepeatingChar(str) {
  let freq = {};
  // console.log(freq);

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return -1;
}
let str1 = "helloheo";
// console.log(fundFirstNoneRepeatingChar(str.toLowerCase()));
// console.log(fundFirstNoneRepeatingChar(str1.toLowerCase()));

let palindromeStr = "perfect professional answer";

function isAnyWordPalindrome(str) {
  let splitInWords = str.toLowerCase().split(" ");

  for (const word of splitInWords) {
    let words = word.split("").reverse().join("");

    if (words === word) {
      return word;
    }
  }
  return false;
}

// console.log(isAnyWordPalindrome(palindromeStr));

function findRpeatedWord(str) {
  let newStr = str.split("");
  return newStr.filter((ele, index) => newStr.indexOf(ele) !== index).join("");
}

console.log(findRpeatedWord("palindromestr"));

// it is not best approatch
// function reverseVowelsStr(str) {
//   let vowels = "aeiouAEIOU";
//   let splitStr = str.split("");

//   let findVowels = splitStr.filter((char) => vowels.includes(char)).reverse();
//   console.log(findVowels);

//   return splitStr
//     .map((char) => (vowels.includes(char) ? findVowels.shift() : char))
//     .join("");
// }

// console.log(reverseVowelsStr("hello javascript"));

function reverseVowelsStr(str) {
  let vowels = "aeiouAEIOU";
  let splitStr = str.split("");

  let left = 0;
  let right = splitStr.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(splitStr[left])) {
      left++;
    }
    while (left < right && !vowels.includes(splitStr[right])) {
      right--;
    }

    if (left < right) {
      [splitStr[left], splitStr[right]] = [splitStr[right], splitStr[left]];
      left++;
      right--;
    }
  }
  return splitStr.join("");
}

// console.log(reverseVowelsStr("hello javascript"));

function totalWordChar(str) {
  let count = 0;

  let splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    count = count + splitStr[i].length;
  }
  return { word: count, char: splitStr.length, withoutspace: str.length };
}

console.log(totalWordChar(palindromeStr));
