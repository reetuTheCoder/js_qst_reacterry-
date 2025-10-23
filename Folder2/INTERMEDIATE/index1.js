let str = "rreetu";

console.log(
  str.split("").find((ele) => str.indexOf(ele) === str.lastIndexOf(ele))
);

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

console.log([...new Set([...arr1, ...arr2])]);

// function mergeArryWithoutDuplicates(arr1, arr2) {
//     let combined = [...arr1, ...arr2];
//   return combined.filter((num, index) => combined.indexOf(num) === index);
// }

// console.log(mergeArryWithoutDuplicates(arr1, arr2));

function mergeArryWithoutDuplicates(arr1, arr2) {
  let arr = [...arr1];
//   console.log(arr);

  arr2.forEach((ele)=> {
    if (!arr.includes(ele)) {
        arr.push(ele)
    }
  })

  return arr
}

console.log(mergeArryWithoutDuplicates(arr1, arr2));
