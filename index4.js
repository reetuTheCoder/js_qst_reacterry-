// it will modify your original array

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const getRandom = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    // console.log("temp", temp);

    arr[i] = arr[getRandom];
    arr[getRandom] = temp;
  }
  return arr;
}

// const numbers = [1, 2, 3, 4, 5,6];
// let shuffled = shuffleArray(numbers)
// console.log(shuffled);
// console.log(numbers);

// console.log(shuffleArray(numbers));

// origianl array will not change
function shuffleArray1(arr) {
  const copyArr = [...arr];

  for (let i = copyArr.length - 1; i > 0; i--) {
    const getRandom = Math.floor(Math.random() * (i + 1));
    const temp = copyArr[i];
    // console.log("temp", temp);

    copyArr[i] = copyArr[getRandom];
    copyArr[getRandom] = temp;
  }
  return copyArr;
}

const numbers = [1, 2, 3, 4, 5, 6];
let shuffled = shuffleArray1(numbers);
// console.log(shuffled);
// console.log("realCopy", numbers);

//  it will generate HEX color code
function randomColor() {
  let letters = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(randomColor());

function randomColor1() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

console.log(randomColor1());

let str = "hello reetu singh";

// it will do first work capital
function capitalWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// console.log(capitalWord(str));

// it will do all text first world capital
function capitalWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(capitalWord(str));
