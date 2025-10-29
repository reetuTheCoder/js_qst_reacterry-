let str = "hello javascript";

// function findRepeatedWord(str) {
//   let newStr = str.toLowerCase().split("");

//   return newStr.filter((ele, index) => newStr.indexOf(ele) !== index).join("");
// }

// console.log(findRepeatedWord(str));



function findRepeatedWord(str) {
 let freq = {}
 let duplicate = []

 for (const word of str) {
    freq[word] = (freq[word]||0 )+ 1
 }
 for (const word in freq) {
   if (freq[word] > 1) {
    duplicate.push(word)
   }
 }

 return duplicate.join("")
}

console.log(findRepeatedWord(str));