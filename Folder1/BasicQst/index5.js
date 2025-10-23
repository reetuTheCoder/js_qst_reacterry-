let arr = ["apple", "banana", "pear", "banana", "orange", "apple"];

// function sortStr(arr) {
//     return arr.sort()
// }
// console.log(sortStr(arr));

function sortChatBy(arr) {
  return arr.map((word) => word.split("").sort().join(""));
}

// console.log(sortChatBy(arr));

function getFibonacci(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  
  const fib = [0, 1];

  console.log("fib111", fib);
  for (let i = 2; i < n; i++) {
    console.log("i value", i);

    console.log("fib222", fib);

    fib.push(fib[i - 1] + fib[i - 2]);
    console.log("fib333", fib);
  }

  return fib;
}

console.log(getFibonacci(3));
