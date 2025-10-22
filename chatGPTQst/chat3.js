// Remove all duplicate characters from a string and return the cleaned string.

function findDuplicatStr(str) {
  let charCount = {};
  let dulicateVal = [];

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;

    console.log(char, "charCount[char] ", charCount[char]);
  }

  for (const char in charCount) {
    if (charCount[char] > 1) {
      dulicateVal.push(char);
    }
  }

  return dulicateVal;
}

// console.log(findDuplicatStr("reetut"));


function removeDuplicatStr(str) {
  let charCount = {};
  let result = "";

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      result += char;
    }
  }

  return result;
}

// console.log(removeDuplicatStr("reetut")); 
// console.log(removeDuplicatStr("reetus")); 
// console.log(removeDuplicatStr("abcdea")); 


function removeDuplicatStr(str) {
  return str.split("").filter((val, index)=> str.indexOf(val) === index)
}
// console.log(removeDuplicatStr("reetut")); 


function removeDuplicatStr(str) {
  return [...new Set(str)]
}
console.log(removeDuplicatStr("singhhgti")); 