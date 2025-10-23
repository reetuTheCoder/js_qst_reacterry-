let arr = [1, 2, 3, 4, 5];

// rotate array once from right

function rotateOnceRight(arr) {
  arr.unshift(arr.pop());
  return arr;
}
// console.log(rotateOnceRight(arr));



// rotate array once from left
let arr1 = [1, 2, 3, 4, 5];
function rotateOnceLeft(arr) {
  arr.push(arr.shift());
  return arr;
}
// console.log(rotateOnceLeft(arr1));




function rotateArrayKtime(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
// what  is the problem  rotateArrayKtime() here we did not set k lenght
// console.log("arr", arr);

// console.log(rotateArrayKtime(arr, 7));

function rotateArrayKtime1(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotateArrayKtime1(arr, 7));