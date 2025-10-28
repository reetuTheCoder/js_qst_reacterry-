let arr = [1,2,3,2,1]

function isPalindromeArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}


// console.log(isPalindromeArr(arr));

