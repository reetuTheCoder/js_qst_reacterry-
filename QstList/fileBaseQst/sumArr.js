// 2. Sum of array elements

let arr = [1, 2, 3, 4];

function sumArr(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
// console.log(sumArr(arr));

function sumArr(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return total;
    } else {
      total += arr[i];
    }
  }
  return total;
}
console.log(sumArr(arr));
