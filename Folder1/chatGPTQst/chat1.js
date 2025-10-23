// Find the last character in a string that does not repeat.

function findLastNoneRepeat(str) {
  let charFiq = {};

  for (const char of str) {
    charFiq[char] = (charFiq[char] || 0) + 1;
  }

  return [...str].findLast((ele) => charFiq[ele] === 1) || null;
}

// console.log(findLastNoneRepeat("reetu"));

let str = "reetu";
function findLastNoneRepeat(str) {
  let charFiq = {};

  for (const char of str) {
    charFiq[char] = (charFiq[char] || 0) + 1;
  }

  let filterdata = [...str].filter((ele) => charFiq[ele] === 1) || null;

  return filterdata.pop();
}

// console.log(findLastNoneRepeat(str));
console.log(str);

function findLastNoneRepeat(str) {
  let charFiq = {};

  for (const char of str) {
    charFiq[char] = (charFiq[char] || 0) + 1;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);

    if (charFiq[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

// console.log(findLastNoneRepeat(str));

// Find the first character in a string that does not repeat.

function findFirstNoneRepeat(str) {
  let charFiq = {};

  for (const key of str) {
    charFiq[key] = (charFiq[key] || 0) + 1;
  }

  return [...str].find((ele) => charFiq[ele] === 1) || null;
}

console.log(findFirstNoneRepeat(str));


function findFirstNoneRepeat(str) {
  let charFiq = {};

  for (const key of str) {
    charFiq[key] = (charFiq[key] || 0) + 1;
  }

  for (const char of str) {
    if (charFiq[char]=== 1 ) {
        return char
    }
  }

  return null
}

console.log(findFirstNoneRepeat(str));