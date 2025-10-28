// 4. Common elements between arrays

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4,];

let merge = [arr1, arr2];
console.log(merge);

function commonArr(arr) {
  return arr.reduce((acc, val) => {
    acc.filter((ele) => val.includes(ele));
    return acc;
  });
}

// console.log(commonArr(merge));

function commonArr(arr) {
  let freq = {};
  let output = [];

  let flatArr = arr.flat();

  for (const num of flatArr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num in freq) {
    if (freq[num] === merge.length) {
      output.push(Number(num));
    }
  }

  return output
}

console.log(commonArr(merge));
