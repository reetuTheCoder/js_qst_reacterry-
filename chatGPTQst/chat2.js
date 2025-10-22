// Find the character that appears most frequently in a string.

function mostFrequentlyChar(str) {
  let freq = {};
  let result = [];

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char in freq) {
    if (freq[char] > 1) {
      // result.push({ char, count: freq[char] }); // it will give you char + freq
       result.push(char ); // it will five the char
    }
  }

  return result;
}

// console.log(mostFrequentlyChar("reeetuu t"));



function mostFrequentChars(str) {
  const freq = new Map();
  
  for (let char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  return [...freq.entries()]
    .filter(([char, count]) => count > 1)
    .map(([char]) => char);
}

console.log(mostFrequentChars("reeetuu"));



function mostFrequentChars(str) {
  const freq = {};
  const result = new Set();

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] === 2) result.add(char);
  }

  return [...result];
}

console.log(mostFrequentChars("reeetuu t")); 
