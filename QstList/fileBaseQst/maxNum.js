let arr = [2, 5, 1, 8, 3, 10];

function maxNum(arr) {
  return arr.reduce((acc, val) => (acc > val ? acc : val));
}
console.log(maxNum(arr));

function maxNum(arr) {
  let maxVal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}
console.log(maxNum(arr));
