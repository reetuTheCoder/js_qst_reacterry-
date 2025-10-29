let arr = [1, [2, [3, 4]], 5]

function flattenArr(arr) {
    return arr.flat(Infinity)
}

console.log(flattenArr(arr));
