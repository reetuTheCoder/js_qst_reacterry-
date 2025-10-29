let str = "hello javaScript programming";

// this function only return first ele whose lenght will be match it will aavoid second same length char
function LongestCharInStr(str) {
  let newStr = str.split(" ");
  return newStr.reduce((acc, val) => {
    return val.length > acc.length ? val : acc;
  });
}

// console.log(LongestCharInStr(str));
// console.log(LongestCharInStr("hello world java"));

// if you want largest cha + if the 2 words have same lenght should retun both not should egnore second char go with below
function LongestCharInStrSecondWay(str) {
  let newStr = str.split(" ");
  let maxLength = Math.max(...newStr.map((word) => word.length));
  console.log(maxLength);

  return newStr.filter((word) => word.length === maxLength);
}

// console.log(LongestCharInStrSecondWay("hello javaScript programming"));

// Longest Substring Without Repeating Characters
let str1 = "abcabcbb";

function longestUniqueSubstring(str) {
  let start = 0;
  let maxLen = 0;
  let seen = new Map();

  // console.log(start, maxLen, seen);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // console.log("char", char);

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
      // console.log("start val", start);
    }

    seen.set(char, i);
    // console.log("maxLen11", maxLen);

    maxLen = Math.max(maxLen, i - start + 1);
    // console.log("maxLen22", maxLen);
  }
  return maxLen;
}

console.log(longestUniqueSubstring(str1));
