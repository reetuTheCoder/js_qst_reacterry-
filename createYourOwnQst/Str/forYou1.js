let str = "perfect professional answer";
console.log("original str  :", str);

function findMaxLengthChar(str) {
  let newStr = str.toLowerCase().split(" ");

  return newStr.reduce((acc, val) => (val.length > acc.length ? val : acc));
}

console.log("find max char in str  :", findMaxLengthChar(str));

function findMinLengthChar(str) {
  let newStr = str.toLowerCase().split(" ");

  return newStr.reduce((acc, val) => (val.length > acc.length ? acc : val));
}

console.log("find min char in str  :", findMinLengthChar(str));

// see it again
function findMinMaxBothChar(str) {
  let newStr = str.toLowerCase().split(" ");

  return newStr.reduce(
    (acc, val) => {
      if (val.length > acc.max.length) {
        acc.max = val;
      }
      if (val.length < acc.min.length) {
        acc.min = val;
      }
      return acc;
    },
    { max: newStr[0], min: newStr[0] }
  );
}

console.log("find both min max char in str  :", findMinMaxBothChar(str));

console.log("string contains a specific word  :", str.includes("answer"));

// see it again
function wordStartLower_UpperCase(str) {
  let newStr = str.split(" ");

  let strUpperCase = true;
  let strLowerCase = true;

  for (const char of newStr) {
    // console.log(char);

    let firstChar = char.charAt(0);
    if (firstChar === firstChar.toUpperCase()) {
      strLowerCase = false;
    } else if (firstChar === firstChar.toLowerCase()) {
      strUpperCase = false;
    }
  }
  if (strUpperCase) {
    return "it start with upper";
  } else if (strLowerCase) {
    return "it start with lower";
  } else {
    return "it is mix string  lower and upper";
  }
}

console.log(
  "check str start char are loewr or upper or mixed :",
  wordStartLower_UpperCase(str)
);

// see it again
function firstLastCharUpper(str) {
  let words = str.split(" ");

  if (words.length === 1) return str.toUpperCase();
  words[0] = words[0].toUpperCase();
  words[words.length - 1] = words[words.length - 1].toUpperCase();
  return words.join(" ");
}
console.log("make capital first and last char  :", firstLastCharUpper(str));

// see it again
function firstLastWordUpper(str) {
  let words = str.split(" ");
  return words
    .map((word) => {
      // console.log("word", word.length);

      if (word.length === 1) return word.toUpperCase();
      let first = word[0].toUpperCase();
      let middle = word.slice(1, -1);
      console.log("middle", middle);

      let last = word[word.length - 1].toUpperCase();
      return first + middle + last;
    })
    .join(" ");
}
console.log("make capital first and last word  :", firstLastWordUpper(str));

function replaceSpacesByunderscores(str) {
  return str.split(" ").join("_");
}
console.log(replaceSpacesByunderscores(str));

function alphabeticallySort(str) {
  let words = str.split("");
  return words.sort((a, b) => a- b);
  
}
console.log("alphabetically Sort  :", alphabeticallySort(str));


function wordSortByLength(str) {
  let words = str.split(" ");
  return words.sort((a, b)=> a.length - b.length)
  
}
console.log("word Sort by length  :", wordSortByLength(str));

