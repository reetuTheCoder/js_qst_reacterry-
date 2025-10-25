// 3. Count character frequency

let str = "banana";

// function charFreqCount(str) {
//     let freq = {}

//     for (const char of str) {
//        freq[char] = (freq[char] || 0) + 1
//     }

//     return freq
// }

// console.log(charFreqCount(str));








// function charFreqCount(str) {
//   let freq = {};

//   for (let i = 0; i < str.length; i++) {
//     freq[str[i]] = (freq[str[i]] || 0) + 1
//   }
//   return freq;
// }

// console.log(charFreqCount(str));







function charFreqCount(str) {
  return [...str].reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

console.log(charFreqCount(str));
