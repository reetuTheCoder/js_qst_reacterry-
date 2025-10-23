let arr = ["apple", "banana", "pear", "banana", "orange", "apple"];

let arr1 = [1, 2, 3, 4, 5];

function shuffleArr(arr) {
  let copyArr = [...arr];

  for (let i = copyArr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    // console.log(randomIndex);

    let store = copyArr[i];

    copyArr[i] = copyArr[randomIndex];
    copyArr[randomIndex] = store;
  }
  return copyArr;
}

// console.log(shuffleArr(arr));
// console.log(shuffleArr(arr1));

function shuffleArr(arr) {
  let copyArr = [...arr];
  let shuffled = [];

  while (copyArr.length > 0) {
    let randomIndex = Math.floor(Math.random() * copyArr.length);
    // console.log(randomIndex);
    shuffled.push(copyArr.splice(randomIndex, 1)[0]);
  }
  return shuffled;
}

// console.log(shuffleArr(arr1));


// If you want to shuffle an array n times

function shuffleNTimes(arr, n) {
  let result = [...arr];
  for (let i = 0; i < n; i++) {
    result = shuffleArr(result);
  }
  return result;
}

console.log(shuffleNTimes(arr1, 3));
