// Find the first number in an array that does not repeat.

// first way
let arr = [1, 2, 3, 4, 2, 5, 4];
let color = ["red", "pink", "yellow", "red", "purple", "pink"];

function firstNotRepetedNum(arr) {
  let numFeq = {};

  for (const num of arr) {
    numFeq[num] = (numFeq[num] || 0) + 1;

    // console.log(num, "dffgfh", numFeq[num]);
  }

  return arr.find((ele) => numFeq[ele] === 1);
}

// console.log(firstNotRepetedNum(arr));

// second  way
console.log(
  "fdhdfb",
  arr.find((ele) => arr.indexOf(ele) === arr.lastIndexOf(ele))
);

function firstNotRepetedNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]));

    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

console.log(firstNotRepetedNum(arr));

// Return an array with duplicates removed.

function duplicatesRemove(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
}

// console.log("duplicatesRemove1  :", duplicatesRemove(arr));
console.log("duplicatesRemove2  :", [...new Set(arr)]);

function duplicatesRemove(arr) {
  let count = {};
  let duplicate = [];

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  console.log("count value", count);

  for (const num in count) {
    console.log("num value", num);

    duplicate.push(num);
  }
  return duplicate;
}

console.log("duplicatesRemove3  :", duplicatesRemove(arr));

// Find the number that occurs the most in an array.

function findOccurs(arr) {
  let numFeq = {};
  let maxCount = 0;
  let maxFeq = [];

  for (const num of arr) {
    let feqCount = (numFeq[num] = (numFeq[num] || 0) + 1);
    console.log(feqCount);

    if (feqCount > maxCount) {
      maxCount = feqCount;
      //   maxFeq = num;
    }
  }

  for (const num in numFeq) {
    console.log("fjdgjfd", num === numFeq);

    if (numFeq[num] === maxCount) {
      maxFeq.push(num);
    }
  }
  return maxFeq;
}

console.log("findOccurs   :", findOccurs(arr));

function findOccurs(arr) {
  let numFeq = new Map();
  let maxCount = 0;
  let maxFeq = [];

  for (const num of arr) {
    let count = (numFeq[num] = (numFeq[num] || 0) + 1);
    // console.log("count", count);
    // console.log(numFeq);
    numFeq.set(num, count);
    // console.log(numFeq);

    if (count > maxCount) {
      maxCount = count;
    }
  }

  for (const [num, count] of numFeq.entries()) {
    if (count === maxCount) {
      maxFeq.push(num);
    }
  }

  return maxFeq;
}

console.log("findOccurs   :", findOccurs(color));

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 5, 6, 7, 4];

let color1 = ["red", "pink", "yellow"];
let color2 = ["red", "purple", "pink", "green"];


function findCommonVal(arr1, arr2) {
   return arr1.filter((ele)=> arr2.includes(ele))
}

console.log("findCommonVal  :", findCommonVal(color1, color2));
