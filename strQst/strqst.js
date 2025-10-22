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
       return key 
    }
 }
 return null
}

console.log("first not repeated char", nonRepeatFirstChar(str));
