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
console.log("original arr", arr);

// console.log(rotateArrayKtime(arr, 7));

function rotateArrayKtime1(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

// console.log(rotateArrayKtime1(arr, 7));

// Rotate an array n positions to the right or left.

function rotateArrayNtimeRight(arr, n) {
  let k = n % arr.length;
  if (k === 0) return arr;

  // this console for jut infomation how it is going
  //    console.log("setp 1",arr.slice(-k));
  //    console.log("setp 2",arr.slice(-k).concat(arr))
  //    console.log("setp 3",arr.slice(-k).concat(arr.slice(0)))
  //    console.log("setp 4",arr.slice(-k).concat(arr.slice(0, arr.length)))
  //    console.log("setp 5",arr.slice(-k).concat(arr.slice(0, arr.length -k)))

  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

// console.log(rotateArrayNtimeRight(arr, 5));

function rotateArrayNtimeLeft(arr, n) {
  let k = n % arr.length;

  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(rotateArrayNtimeLeft(arr, 2));
