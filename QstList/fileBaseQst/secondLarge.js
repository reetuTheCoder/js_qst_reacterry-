let arr = [2, 5, 1, 8, 3, 10,12];

// function secondMaxNum(arr) {
//   let sortedArr = [...arr].sort((a, b) => b - a);

//   return sortedArr[1];
// }
// console.log(secondMaxNum(arr));

function secondMaxNum(arr) {
  let firstNum = -Infinity;
  let secondNum = -Infinity;

  for (const num of arr) {
    if (firstNum < num) {
      secondNum = firstNum;
      firstNum = num;
    } else if (secondNum < num && firstNum > num) {
      secondNum = num;
    }
  }
  return secondNum;
}
console.log(secondMaxNum(arr));
