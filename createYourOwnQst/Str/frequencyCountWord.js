//Q1 Count frequency of each word

let str = "Our modern world is unthinkable without software";

function frequencyCountWord(str) {
  let newStr = str.toLowerCase().split("");
  // console.log(newStr);

  let freq = {};

  for (const word of newStr) {
    if (word !== " ") {
      freq[word] = (freq[word] || 0) + 1;
    }
  }

  return freq;
}
console.log(frequencyCountWord(str));
