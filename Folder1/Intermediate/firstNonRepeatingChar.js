// First non-repeating character

function firstNonRepeatedChar(str) {
  for (const char of str) {
    // console.log(char);
    // console.log(str.indexOf(char));
    // console.log("last", str.lastIndexOf(char));
    // console.log(str.indexOf(char) === str.lastIndexOf(char));

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      console.log("char", char);

      return char;
    }
    return null;
  }
}

console.log(firstNonRepeatedChar("rreetu"));




// best way
function firstNonRepeatedChar(str) {
  let fiqChar = {};

  for (const char of str) {
    // console.log(char);
    fiqChar[char] = (fiqChar[char] || 0) + 1;
    console.log(" fiqChar[char]", fiqChar[char]);
  }

  for (const char of str) {
    if (fiqChar[char] === 1) {
        return char
    }
  }
  return null
}

console.log(firstNonRepeatedChar("reetu"));



// best way
function firstNonRepeatedChar(str) {
  let fiqChar = {};

  for (const char of str) {
    // console.log(char);
    fiqChar[char] = (fiqChar[char] || 0) + 1;
    // console.log(" fiqChar[char]", fiqChar[char]);
  }

  return [...str].find(ele => fiqChar[ele] === 1) || null
}

console.log(firstNonRepeatedChar("reetu"));




function firstNonRepeatedChar(str) {
  return [...str].find(char => str.indexOf(char) === str.lastIndexOf(char)) || null;
}

console.log(firstNonRepeatedChar("reetu"));
