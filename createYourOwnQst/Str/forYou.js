let str = "perfect professional answer";
console.log("original str  :", str);
// word lenght
console.log("total word  :", str.length);
// character lenght
console.log("total char  :", str.split(" ").length);

// reverse str just not in the order
console.log("reverse str  :", str.split("").reverse().join(""));

// reverse str in order

function reverseOrder(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
console.log("original str  :", str);
console.log("reverse str in order  :", reverseOrder(str));

console.log("upper letter  :", str.toUpperCase());
console.log("lower letter  :", str.toLowerCase());

function firstWordCapital(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("original str  :", str);
console.log("first letter capital  :", firstWordCapital(str));

function firstNonRepetedWord(str) {
  let freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log("original str  :", str);
console.log("first non repeating char  :", firstNonRepetedWord(str));

function lastNonRepetedWord(str) {
  let freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}
console.log("original str  :", str);
console.log("last non repeating char  :", lastNonRepetedWord(str));

function findDuplicateChar(str) {
  let newStr = str.toLowerCase().split("");

  return newStr.filter((ele, index) => newStr.indexOf(ele) !== index).join("");
}
console.log("original str  :", str);
console.log("duplicate char  :", findDuplicateChar(str));

function removeDuplicateChar(str) {
  let newStr = str.toLowerCase();

  return (uniqueVal = [...new Set(newStr)].join(""));
}
console.log("original str  :", str);
console.log("remove duplicate char :", removeDuplicateChar(str));

function onlyUniqueChar(str) {
  let freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let charKeys = Object.keys(freq)
    .filter((char) => freq[char] === 1)
    .join("");
  //  console.log(charKeys);
  return charKeys;
}
console.log("original str  :", str);
console.log("only unique char :", onlyUniqueChar(str));

function makeStrCamelCase(str) {
  let newStr = str.toLowerCase().split(" ");
  return newStr
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}
console.log("original str  :", str);
console.log("str in camelCase :", makeStrCamelCase(str));

function makeStrSnakeCase(str) {
  let newStr = str.toLowerCase().split(" ");
  return newStr
    .map((word) => {
      return word;
    })
    .join("_");
}
console.log("original str  :", str);
console.log("str in snakeCase :", makeStrSnakeCase(str));


function makeStrKebabCase(str) {
  let newStr = str.toLowerCase().split(" ");
  return newStr
    .map((word) => {
      return word;
    })
    .join("-");
}
console.log("original str  :", str);
console.log("str in kebabCase :", makeStrKebabCase(str));