//Q1 find a str whoes length is > 4

let arr = ["Reetu", "hello", "world", "foo"];

// function findLongerEle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 4) {
//       return arr[i];
//     } else {
//       return null;
//     }
//   }
// }
// console.log(findLongerEle(arr));

function findLongerEle(arr) {
  return arr.find((ele) => ele.length > 4) || null;
}
// console.log(findLongerEle(arr));

// Q2 reverse a str
let str = "Reetu";
function reversStr(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// console.log(reversStr(str));

// Q3 count vovel in the str

// function countStrVowel(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;

//   for (const key of str) {
//     console.log(key);

//     if (vowels.includes(key)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countStrVowel(str));

function countStrVowel(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(element);

    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countStrVowel(str));

// Q4 get value from obj

const object = { foo: 1, bar: 2, baz: 3 };
// function getValues(obj) {
//   return Object.keys(obj).map((key)=> obj[key]);
// }

// console.log(getValues(object));

// function getValues(obj) {
//   return Object.values(obj);
// }

// console.log(getValues(object));

function getValues(obj) {
  let getVal = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      getVal.push(obj[key]);
    }
  }

  return getVal;
}

// console.log(getValues(object));

//Q5 find first audlt user from below users Array obj
const users = [
  { name: "John", age: 15 },
  { name: "Jane", age: 20 },
  { name: "Bob", age: 25 },
];

// it will return first user whoes age is > 18

function audltUser(arr) {
  return arr.find((user) => user.age > 18);
}

console.log(audltUser(users));

// it will return all user whoes age is > 18
// function audltUser(arr) {
//   return arr.filter((user) => user.age > 18);
// }

// console.log(audltUser(users));

// it will return first user whoes age is > 18
// function audltUser(arr) {
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i].age > 18) {
//     return arr[i]
//    }
//     else null
//  }
// }

// console.log(audltUser(users));

//Q6. check every element are str in the array or not

function checkAllEleIsStr(arr) {
  return arr.every((ele) => typeof ele === "string");
}

// console.log(checkAllEleIsStr(["Reetu", "singh"]));
// console.log(checkAllEleIsStr(["Reetu", "122"]));
// console.log(checkAllEleIsStr(["Reetu", 122]));

// Q7

const str1 = "hello Reetu Singh";

// function reversFullStr(str) {
//     let reversed = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i]) {
//         reversed += str[i]
//     }
//   }
//   return reversed
// }

// console.log(reversFullStr(str1));

function reversFullStr(str) {
  let reversed = "";
  for (const key of str) {
    reversed = key + reversed;
  }

  return reversed;
}

// console.log(reversFullStr(str1));

function randomNum() {
//   return Math.random() * 10;    // it will generate number 0 to 10
return Math.random() + 10;         // it will generate just 10 then some after dot 
}

console.log(randomNum());
