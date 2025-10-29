// Find the first non-repeating character in a string

let str = "hello javascript";
function firstNonRepatingChar(str) {
  let freq = {};

  for (const word of str) {
    freq[word] = (freq[word] || 0) + 1;
  }

  for (const word of str) {
    if (freq[word] === 1) {
      return word;
    }
  }
  return null;
}

console.log(firstNonRepatingChar(str));
