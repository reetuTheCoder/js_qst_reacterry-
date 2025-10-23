let str = "hello";
// console.log(str.split("").reverse().join(""));

function reversedStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
// console.log(reversedStr(str));

function countVowel(str) {
  let vowels = "aeiouAEIOU";
  let storeVoWel = [];

  for (const char of str) {
    if (vowels.includes(char)) {
      storeVoWel.push(char);
    }
  }

  return storeVoWel;
}

// console.log(countVowel("reetu"));

let arr = [1, 5, 2, 9, 3, 12];

function maxNum(arr) {
  return arr.reduce((acc, curval) => (acc > curval ? acc : curval));
}

// console.log(maxNum(arr));

function sumArr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// console.log(sumArr(arr));

function sumArr(arr) {
  return arr.reduce((acc, curval) => acc + curval);
}

// console.log(sumArr(arr));

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty([]));
// console.log(isObjectEmpty({ a: 1 }));

function isObjectEmpty(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 0
  );
}
console.log(isObjectEmpty({}));
console.log(isObjectEmpty([]));
console.log(isObjectEmpty(null)); 
console.log(isObjectEmpty({ a: 1 }));
