// Q1. revers array

let arr = ["e", "d", "c", "b", "a"];

function reverseAnArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseAnArray(arr));

// Q2. Find the largest number in array

let arr1 = [4, 7, 2, 9, 1, 5, -2];

// function findMax(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(arr1));

function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }

  return arr.reduce((max, cur) => (cur > max ? cur : max), arr[0]);
}
// console.log(findMax(arr1));

// function findMax(arr) {
//   if (arr.length === 0) {
//     return null
//   }

//  let sortedval = arr.sort((a,b)=> b-a)
//  return sortedval[0]
// }

// console.log(findMax(arr1));

//Q3. Array.lastIndexOf

let arr2 = [1, 2, 4, 3, 2, 4];

// function findLastIndexOf(arr, val) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findLastIndexOf(['foo', 'bar', 'baz', 'bar'], 'bar'));

function findLastIndexOf(arr, val) {
  return arr.reduce((lastIndex, item, index) => {
    console.log("index", index);
    console.log("lastIndex", lastIndex);
    console.log("item", item);

    return item === val ? index : lastIndex;
  }, -1);
}

// console.log(findLastIndexOf(arr2, 2));

//Q4 Sum even numbers

// function sumOfEvens(arr) {
//   let evenNum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNum += arr[i];
//     }
//   }
//   return evenNum;
// }

// console.log(sumOfEvens([1, 2, 3, 4, 5, 6]));

function sumOfEvens(arr) {
  return arr.reduce((acc, val) => {
    if (val % 2 === 0) {
      return acc + val;
    } else {
      return acc;
    }
  }, 0);
}

// console.log(sumOfEvens([1, 2, 3, 4, 5, 6, 12]));

//Q5 Sum every third number

function sumOfThirds(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7]));

function sumOfThirds(arr) {
  return arr.reduce((acc, val, index) => {
    console.log(acc,  val, index);
    
    if ((index + 1) % 3 === 1) {
      return acc + val;
    } else {
      return acc;
    }
  }, 0);
}

console.log(sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7]));
