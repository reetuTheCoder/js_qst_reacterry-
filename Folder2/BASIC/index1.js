let str = "hello";
console.log(str.split("").reverse().join(""));

function reversedStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reversedStr(str));

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

console.log(countVowel("reetu"));



let arr = [1, 5, 2, 9, 3, 12];

function maxNum(arr) {
  return arr.reduce((acc, curval) => (acc > curval ? acc : curval));
}

console.log(maxNum(arr));
