// Find the most frequent character

let str = "hello javascript";
function mostFrequentWord(str) {
  let newStr = str.split("");

  let freq = {};
  let maxChar = "";
  let maxCount = 0;

  for (const word of newStr) {
    if (word !== " ") {
      freq[word] = (freq[word] || 0) + 1;
    }
  }

  for (const key in freq) {
    if (freq[key] > maxCount) {
      maxCount = freq[key];
      maxChar = key;
    }
  }
  return { maxChar, maxCount };
}
console.log(mostFrequentWord(str));

// but now the qst is if there are two or more char whose freq count is same then like `aabbccd`

function allmostFrequentWord(str) {
  let newStr = str.split("");

  let freq = {};
  let maxCount = 0;

  for (const word of str) {
    if (word !== " ") {
      freq[word] = (freq[word] || 0) + 1;

      if (freq[word] > maxCount) {
        maxCount = freq[word];
      }
    }
  }
  //  console.log(Object.keys(freq));
  let maxChar = Object.keys(freq).filter((char) => freq[char] === maxCount)
  console.log(maxChar);

  return { maxChar, maxCount}
  
}
console.log(allmostFrequentWord(str));
