let str = "Our modern world is unthinkable without software";

//Convert the given string into an array of words.
// Create a new array that contains only the elements at even indices from the original array.
// After adding each even-indexed element to the new array, also add one element (1) from the array given below.
// Capitalize the first letter of each word in the array.
// Filter out all words whose length is greater than or equal to 4.
// Find all words that start with a vowel.
// Remove all vowels from the given string.

let makeArr = str.split(" ");
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
