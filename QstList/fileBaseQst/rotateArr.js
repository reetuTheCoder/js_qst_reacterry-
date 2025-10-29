// 6. Rotate array k times (right)

let arr = [1, 2, 3, 4, 5];

// function rotateArrRight(arr, k) {
//   k = k % arr.length;

//   for (let i = 0; i < k; i++) {
//     let lastEl = arr.pop();
//     // console.log(lastEl);
//     arr.unshift(lastEl);
//   }
//   return arr;
// }

// console.log(rotateArrRight(arr, 2));

function rotateArrRight(arr, k) {
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

console.log(rotateArrRight(arr, 2));
