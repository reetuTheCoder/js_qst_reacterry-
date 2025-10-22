// Reverse a string

const str = "hello7";
// console.log(str.split("").reverse().join(""));

function reversedStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log("before",i, result)
    result += str[i];
    console.log("after",str[i], result)

  }
  return result;
}

// console.log(reversedStr("hello"));
// console.log(reversedStr(""));
// console.log(reversedStr(null));

// // Count vowels in a string
// const str1 = "Magic Chat";

// function countVowel(str) {
//   let vowels = "aeiouAEIOU"
//   let word  = []

//   for (const key of str) {
//     if (vowels.includes(key)) {
//       word.push(key)
//     }
//   }
//   return word
// }
// console.log(countVowel(str1));


function reverseString1(str) {
  console.log("Input string:", str);
  
  let result = "";
  console.log("Initial result:", result);
  console.log("-----------------------------");

  for (const char of str) {
    console.log("Current character:", char);
    console.log("Result before adding:", result);

    // Prepend character to the current result
    result = char + result;

    console.log("Result after adding:", result);
    console.log("-----------------------------");
  }

  console.log("Final reversed string:", result);
  return result;
}

console.log("Output:", reverseString1("hello7"));


