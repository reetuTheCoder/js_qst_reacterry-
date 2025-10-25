// 3. Remove duplicates

let arr = [1, 2, 2, 3, 4, 4]

function removeDuplicat(arr) {
   return arr.filter((ele, index)=> arr.indexOf(ele) === index)
}
// console.log(removeDuplicat(arr));


function removeDuplicat(arr) {
   return arr.filter((ele, index)=> arr.indexOf(ele) === index)
}