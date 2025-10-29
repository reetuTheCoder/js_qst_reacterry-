// Reverse each word in the sentence (word order same).
// Find the longest and shortest word.
// Count vowels and consonants.
// Count the frequency of each character (ignore spaces).
// Sort words by length (ascending or descending).
// Convert the sentence to camelCase, snake_case, and kebab-case.

let str = "Our modern world is unthinkable without software";

function sentenceReverse(str) {
  let reversed = "";

  for (const char of str) {
    // console.log(char);
    reversed = char + reversed;
  }
  return reversed;
}

console.log(sentenceReverse(str));

function sentenceReverseByOrder(str) {
  let words = str.split(" ");
  let reversed = [];

  for (const char of words) {
    let reversedWord = "";

    for (let i = char.length - 1; i >= 0; i--) {
      reversedWord += char[i];
    }

    reversed.push(reversedWord);
  }
  return reversed.join(" ");
}

// console.log(sentenceReverseByOrder(str));

function longestAndShorterWord(str) {
  let strSplit = str.split(" ");

  return strSplit.reduce(
    (acc, val) => {
      // console.log(val,"acc val", acc);

      if (val.length > acc.longest.length) {
        acc.longest = val;
      }
      if (val.length < acc.shortest.length) {
        acc.shortest = val;
      }
      return acc;
    },
    { longest: strSplit[0], shortest: strSplit[0] }
  );
}
console.log(longestAndShorterWord(str));

// function longestWord(str) {
//   let strSplit = str.split(" ");

//   return strSplit.reduce((acc, val) => {
//     // console.log(val,"acc val", acc);
//     return val.length > acc.length ? val : acc;
//   });
// }
// console.log(longestWord(str));

function countVowelConst(str) {
  let vowel = "aeiouAEIOU";

  let vowelStore = 0;
  let consonants = 0;

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowel.includes(char)) {
        vowelStore ++
      } else {
        consonants ++
      }
    }
  }
    return { vowel:vowelStore, consonants: consonants};
}

console.log(countVowelConst(str));

function frequencyCount(str) {
  let strArr = str.toLowerCase().split("");
  console.log(strArr);

  let freq = {};

  for (const char of strArr) {
    if (char !== " ") {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  return freq;
}

// console.log(frequencyCount(str));

function sortByWord(str) {
  let strArr = str.toLowerCase().split(" ");
  return strArr.sort((a, b) => a.length - b.length);
}

// console.log(sortByWord(str));

function convertSentIncamelCase(str) {
  let strArr = str.toLowerCase().split(" ");
  return strArr
    .map((word, idx) => {
      if (idx === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
}

// console.log(convertSentIncamelCase(str));

function convertSentInkebab_case(str) {
  let strArr = str.toLowerCase().split(" ");
  return strArr
    .map((word) => {
      return word;
    })
    .join("-");
}

// console.log(convertSentInkebab_case(str));

function convertSentInsnake_case(str) {
  let strArr = str.toLowerCase().split(" ");
  return strArr
    .map((word) => {
      return word;
    })
    .join("_");
}

// console.log(convertSentInsnake_case(str));
