// function findMostFrequently(str) {
//   let feqCount = {};
//   let count = [];

//   for (const char of str) {
//     feqCount[char] = (feqCount[char] || 0) + 1;
//   }

//   for (const char in feqCount) {
//     if (feqCount[char] > 1) {
//       count.push(char);
//       // count.push({char, count: feqCount[char]});
//     }
//   }

//   return count
// }

// console.log("ffdb", findMostFrequently("reettu hello"));

// function findMostFrequently(str) {
//   let feqCount = new Map();
//   console.log(feqCount);

//   for (const char of str) {
//     if (char === " ") continue; // without it it will count space as a character

//     feqCount.set(char, (feqCount.get(char) || 0) + 1);
//     // console.log(feqCount.set(char, (feqCount.get(char) || 0) + 1));
//   }

//   console.log([...feqCount.entries()]);
//   let store = [...feqCount.entries()]
//     .filter(([char, count]) => count > 1)
//     .map(([char]) => char);
//   console.log("store", store);

//   return store;
// }

// console.log("ffdb", findMostFrequently("hello reetu "));

function findMostFrequently(str) {
  let feqCount = new Set();
  let output = {};
  console.log(output);

  for (const char of str) {
    if (char === " ") continue; 
    output[char] = (output[char] || 0) + 1;

    if (output[char] > 1) {
      feqCount.add(char);
    }
  }

  return feqCount;
}

console.log("ffdb", findMostFrequently("hello reetu "));
