// 6. Find first non-repeated character

let str = "swiss";
function nonRepeatedChar(str) {
  let freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const key in freq) {
    if (freq[key] === 1) {
      return [key];
    }
  }

  return null;
}

// console.log(nonRepeatedChar(str));

function nonRepeatedChar(str) {
  return (
    str.split("").find((ele) => str.indexOf(ele) === str.lastIndexOf(ele)) ||
    null
  );
}

console.log(nonRepeatedChar(str));
