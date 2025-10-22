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

  for (let i = str.length -1; i >= 0; i--) {
    output += str[i];
  }
  return output === str;
}
// console.log("string is a palindrome:-", ispalindromeStr("maam"));


function ispalindromeStr(str) {
  let reversestr = str.split("").reverse().join("")
//   console.log(reversestr);

  return str === reversestr
  
}
console.log("string is a palindrome:-", ispalindromeStr("level"));