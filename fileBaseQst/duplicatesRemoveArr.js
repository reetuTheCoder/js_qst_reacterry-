// 3. Remove duplicates

let arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicat(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
}
// console.log(removeDuplicat(arr));

function removeDuplicat(arr) {
 return [...new Set(arr)]
}

// console.log(removeDuplicat(arr));


function removeDuplicat(arr) {
 let duplicates = []

 for (const num of arr) {
    if (!duplicates.includes(num)) {
        duplicates.push(num)
    }
 }

 return duplicates
}

console.log(removeDuplicat(arr));