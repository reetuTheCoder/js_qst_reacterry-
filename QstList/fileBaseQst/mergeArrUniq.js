// 10. Merge two arrays & unique

let arr1 = [1, 2];
let arr2 = [2, 3, 4];

let merge = [...arr1, ...arr2];
function mergeArrUnique(arr) {
  return new Set([arr]);
}
console.log(mergeArrUnique(merge));
