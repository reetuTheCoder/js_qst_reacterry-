// Q1. reverse array

let arr = [1, 2, 3, 4];

function reverseArry(arr) {
  return arr.reverse();
}
// console.log(reverseArry(arr));

function reverseWithLoop(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    reversed.unshift(element);
  }
  return reversed;
}
// console.log(reverseWithLoop(arr));

function reverseWithReduce(arr) {
  return arr.reduce((acc, val) => [val, ...acc], []);
}
// console.log(reverseWithReduce(arr));

// Q2. Leap year

// function findLeapYear(year) {
//   if (year <= 0) {
//     return false;
//   }
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(findLeapYear(1100));

function findLeapYear(year) {
  // new Date(year, monthIndex, day)
  return new Date(year, 1, 29).getDate() === 29;
}
// console.log(findLeapYear(1100));

// Q3 String.split

let msg = "The quick brown fox";

// console.log(msg.split(" "));

function splitStr(str) {
  let output = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (word) {
        console.log("word value", word);

        output.push(word);
        word = "";
      }
    } else {
      word += str[i];
      console.log("word value111", word);
    }
  }
  if (word) {
    console.log("word value22", word);
    output.push(word);
  }
  return output;
}

// console.log(splitStr(msg));

// Q4 remove falsy value

const arr1 = [0, 1, false, 2, "", 3];

// function removeFalsyVal(arr) {
//     return arr.filter(Boolean)
// }

// console.log(removeFalsyVal(arr1));

function removeFalsyVal(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      console.log(arr[i]);

      output.push(arr[i]);
    }
  }
  return output;
}

// console.log(removeFalsyVal(arr1));

// Q5 Remove vovel from str

function removeVovel(str) {
  let vowels = "aeiouAEIOU";
  let output = [];

  for (const key of str) {
    // console.log(key);
    if (!vowels.includes(key)) {
      output += key;
    }
  }
    return output;
}

console.log(removeVovel(msg));

