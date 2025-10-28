let str = "Our modern world is unthinkable without software";

//Q1 make str in the array form
let makeArr = str.split(" ");

//Q2 now only store even index value in a array

function evenIndexVal(arr) {
  let evenIndex = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(arr[i]);
    }
  }

  return evenIndex;
}
// console.log(evenIndexVal(makeArr));

//Q3 when you add evenIdx ele in the aaray just after each even ele added in even arr add 1, 1 ele from blelow array
// like ["Our", "one", "world", "two"]
let numStr = ["one", "two", "three", "four", "five", "six", "seven"];

function evenIndexVal1(arr, numStr) {
  let evenIndex = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(arr[i]);

      if (numStr[i / 2]) {
        evenIndex.push(numStr[i / 2]);
      }
    }
  }
  return evenIndex;
}

// console.log(evenIndexVal1(makeArr, numStr));

//Q4 each  word first letter should be capital
function evenIndexVal1(arr, numStr) {
  let evenIndex = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(arr[i]);

      if (numStr[i / 2]) {
        evenIndex.push(numStr[i / 2]);
      }
    }
  }
  //   console.log("my evenIndex", evenIndex);

  let firstWordCapital = evenIndex.map(
    (ele) => ele.charAt(0).toUpperCase() + ele.slice(1)
  );
  return firstWordCapital;
}

// console.log(evenIndexVal1(makeArr, numStr));

//Q5 filter out that word whose length is >= 4
function evenIndexValfilter(arr, numStr) {
  let evenIndex = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(arr[i]);

      if (numStr[i / 2]) {
        evenIndex.push(numStr[i / 2]);
      }
    }
  }
  //   console.log("my evenIndex", evenIndex);

  let firstWordCapital = evenIndex.map(
    (ele) => ele.charAt(0).toUpperCase() + ele.slice(1)
  );

  let filterVal = firstWordCapital.filter((ele) => ele.length >= 4);
  //   console.log("filterVal", filterVal);

  return filterVal;
}

// console.log(evenIndexValfilter(makeArr, numStr));

//Q6 find that word whose start with vowel
function findStartWorldWithVowel(arr, numStr) {
  let evenIndex = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(arr[i]);

      if (numStr[i / 2]) {
        evenIndex.push(numStr[i / 2]);
      }
    }
  }
  //   console.log("my evenIndex", evenIndex);

  let firstWordCapital = evenIndex.map(
    (ele) => ele.charAt(0).toUpperCase() + ele.slice(1)
  );
  let vowel = "aeiouAEIOU";

  let findWordStartVowel = firstWordCapital.filter((word) =>
    vowel.includes(word.charAt(0))
  );

  return findWordStartVowel;
}

console.log(findStartWorldWithVowel(makeArr, numStr));

//Q7 remove all vowels
function removeVowels(arr, numStr) {
  let evenIndex = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndex.push(arr[i]);

      if (numStr[i / 2]) {
        evenIndex.push(numStr[i / 2]);
      }
    }
  }
  let firstWordCapital = evenIndex.map(
    (ele) => ele.charAt(0).toUpperCase() + ele.slice(1)
  );

  let afterRemovedVowels = firstWordCapital.map((word) =>
    word.replace(/[aeiouAEIOU]/g, "")
  );

  return afterRemovedVowels;
}

console.log(removeVowels(makeArr, numStr));
