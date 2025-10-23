// Remove duplicates from an array

const arr = [1, 2, 2, 3, 4, 4, 5];

// function removeDuplicate(arr) {
//   let duplicate = [];

//   for (const key of arr) {
//     console.log(key);

//     if (!duplicate.includes(key)) {
//       duplicate.push(key)
//     }

//   }
//   return duplicate
// }

// console.log(removeDuplicate(arr));

// function removeDuplicate(arr) {
//   // return arr.filter((val, index) => arr.indexOf(val) !== index); // it will return duplicate
//   return arr.filter((val, index) => arr.indexOf(val) === index); // it will return unique value
// }

// console.log(removeDuplicate(arr));

function removeDuplicate(arr) {
  let ele = new Set();
  let duplicate = [];

  for (const key of arr) {
    if (!ele.has(key)) {
      ele.add(key);
      duplicate.push(key);
    }
  }

  return duplicate;
}

// console.log(removeDuplicate(arr));

// Merge two arrays and remove duplicates
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

let newArr = arr1.concat(arr2);
// console.log(newArr);
function duplicateVal(arr) {
  const elem = new Set();
  const duplicate = [];

  for (const key of arr) {
    if (!elem.has(key)) {
      elem.add(key);
      duplicate.push(key);
    }
  }

  return duplicate;
}

// console.log(duplicateVal(newArr));
