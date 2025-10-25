let str = "rreetu";

// console.log(
//   str.split("").find((ele) => str.indexOf(ele) === str.lastIndexOf(ele))
// );

function frequencyCount(str) {
  let feq = {};

  for (const char of str) {
    feq[char] = (feq[char] || 0) + 1;
  }

  return feq;
}

console.log(frequencyCount("banana"));

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

// console.log([...new Set([...arr1, ...arr2])]);

// function mergeArryWithoutDuplicates(arr1, arr2) {
//     let combined = [...arr1, ...arr2];
//   return combined.filter((num, index) => combined.indexOf(num) === index);
// }

// console.log(mergeArryWithoutDuplicates(arr1, arr2));

function mergeArryWithoutDuplicates(arr1, arr2) {
  let arr = [...arr1];
  //   console.log(arr);

  arr2.forEach((ele) => {
    if (!arr.includes(ele)) {
      arr.push(ele);
    }
  });

  return arr;
}

// console.log(mergeArryWithoutDuplicates(arr1, arr2));

let nestedArr = [1, [2, [3, 4]], 5];

// console.log(nestedArr);
// console.log(nestedArr.flat(Infinity));

function flatten(arr) {
  const stack = [...arr];
  const result = [];
  console.log("stackstack", stack);

  while (stack.length) {
    // console.log("stack.length", stack.length);
    const storeCutElm = stack.pop();
    if (Array.isArray(storeCutElm)) {
      stack.push(...storeCutElm);
      // console.log("fijfj", stack);
      // console.log("storeCutElm", storeCutElm);
    } else {
      result.push(storeCutElm);
    }
  }

  console.log("result ::", result);

  return result.reverse();
}
console.log(flatten([1, [2, [3, [4, [5, [6, [7]]]]]]]));

// 5. Find Common Elements in Two Arrays

let arr3 = [1, 2, 3];
let arr4 = [2, 3, 4, 1];

let commonArr = [arr3, arr4];
// console.log(commonArr);

// function commonEle(arr) {
//   return arr.reduce((acc, cVal) =>
//     acc.filter((ele) => cVal.includes(ele), [0])
//   );
// }

// console.log("fdgdg", commonEle(commonArr));

function commonEle(arr) {
  console.log("arr val", arr);
  
  let feq = {};
  let output = [];
  let flatArr = arr.flat();
  console.log("flatArr", flatArr.length);

  for (const num of flatArr) {
    feq[num] = (feq[num] || 0) + 1;

    console.log("feq[num] ", feq[num]);
  }

  for (const key in feq) {
    console.log("key", key);
    if (feq[key] === commonArr.length) {
      output.push(Number(key));
    }
  }

  return output;
}

console.log("fdgdg", commonEle(commonArr));


