// Find the last character in a string that does not repeat.

let str = "hello javascript";

function nonRepeatLastChar(str) {
  let charcount = {};

  for (const char of str) {
    charcount[char] = (charcount[char] || 0) + 1;
    // console.log(charcount[char]);
  }

  return [...str].findLast((ele) => charcount[ele] === 1);
}

// console.log(nonRepeatLastChar(str));

function nonRepeatLastChar(str) {
  let charcount = {};

  for (const char of str) {
    charcount[char] = (charcount[char] || 0) + 1;
    // console.log(charcount[char]);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (charcount[str[i]] === 1) {
      return str[i];
    }
  }

  return charcount;
}

console.log("last not repeated char", nonRepeatLastChar(str));

//Find the first character that appears more than once.

function nonRepeatFirstChar(str) {
  let charcount = {};

  for (const char of str) {
    charcount[char] = (charcount[char] || 0) + 1;
    // console.log(charcount[char]);
  }

  return [...str].find((ele) => charcount[ele] === 1);
}

// console.log("first not repeated char", nonRepeatFirstChar(str));

function nonRepeatFirstChar(str) {
  let charcount = {};

  for (const char of str) {
    charcount[char] = (charcount[char] || 0) + 1;
    // console.log(charcount[char]);
  }

  for (const key of str) {
    if (charcount[key] === 1) {
      return key;
    }
  }
  return null;
}

console.log("first not repeated char", nonRepeatFirstChar(str));

// Write a function that counts vowels and consonants in a string.

console.log(str);

function countsVowelAndConsonants(str) {
  let vowels = "aeiouAEIOU";
  let totalVowels = [];
  let totalConst = [];

  for (const char of str) {
    // console.log(char);
    if (vowels.includes(char)) {
      totalVowels.push(char);
    } else {
      totalConst.push(char);
    }
  }
  return { totalVowels, totalConst };
}

console.log("find vowels and const:-", countsVowelAndConsonants(str));

// Determine if a string is a palindrome (reads the same forwards and backwards).

function ispalindromeStr(str) {
  let output = "";

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output === str;
}
// console.log("string is a palindrome:-", ispalindromeStr("maam"));

function ispalindromeStr(str) {
  let reversestr = str.split("").reverse().join("");
  //   console.log(reversestr);

  return str === reversestr;
}
console.log("string is a palindrome:-", ispalindromeStr("level"));

// Find the character that appears most frequently in a string.

function mostfrequentChar(str) {
  let feqs = {};
  let repeatedChar = [];

  for (const char of str) {
    feqs[char] = (feqs[char] || 0) + 1;
  }

  for (const char in feqs) {
    if (feqs[char] > 1) {
      repeatedChar.push(char);
    }
  }
  return repeatedChar;
}

console.log("mostfrequentChar", mostfrequentChar("reetuu"));

// Remove all duplicate characters from a string and return the cleaned string.

// function removeDuplicateChar(str) {
//   let feqs = {};
//   let uniqueChar = "";

//   for (const char of str) {
//     feqs[char] = (feqs[char] || 0) + 1;
//   }

//   for (const char of str) {
//     if (feqs[char] === 1) {
//       uniqueChar += char;
//     }
//   }
//   return uniqueChar;
// }
// console.log("removeDuplicateChar", removeDuplicateChar("reetuu"));

function removeDuplicateChar(str) {
  return str.split("").filter((ele, index) => str.indexOf(ele) === index);
}
console.log("removeDuplicateChar", removeDuplicateChar("reetuu"));

function removeDuplicateChar(str) {
  return [...new Set(str)];
}
console.log("removeDuplicateChar", removeDuplicateChar("singhh"));

// Check if two strings are anagrams of each other.
//what is anagrams = when both strings contain the same characters,

function isAnagrams(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  return (
    newStr1.split("").sort().join("") === newStr2.split("").sort().join("")
  );
}

// console.log("isAnagrams", isAnagrams("seema", "reema"));
// console.log("isAnagrams", isAnagrams("seema", "meesa"));

function isAnagrams(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  let charfeq = {};

  if (newStr1.length !== newStr2.length) {
    return false;
  }

  for (const char of newStr1) {
    charfeq[char] = (charfeq[char] || 0) + 1;
  }

  for (const char of newStr2) {
    if (!charfeq[char]) {
      return false;
    } else {
      charfeq[char]--;
    }
  }

  return true;
}
console.log("isAnagrams gfdg: ", isAnagrams("seema", "meesa"));

// Reverse the order of words in a sentence. Example: "hello world" → "world hello".

function reverseStr(str) {
  let word = "";
  let output = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
      console.log("word", word);
    } else {
      if (word) {   
        output.unshift(word);

        console.log("output", output);
        word = "";
      }
    }
  }
  if (word) {
    output.unshift(word);
  }

  console.log("output1111", output);

  return output.join(" ");
}
console.log("reverseStr", reverseStr("hello world"));
