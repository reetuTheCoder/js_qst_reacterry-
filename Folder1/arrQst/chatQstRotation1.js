// Check if two arrays are rotations of each other

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 1, 2];



function areRotations(arrA, arrB) {
  return (
    arrA.length === arrB.length &&
    arrA.concat(arrA).join(",").includes(arrB.join(","))
  );
}

console.log(areRotations(arr1, arr2));

const str1 = "abcdef";
const str2 = "defabc";


console.log(areRotations(str1.split(''), str2.split('')));
