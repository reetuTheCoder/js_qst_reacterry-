// 9. Replace spaces with hyphens

function addHyphens(str) {
    return str.split(" ").join("-")
}
console.log(addHyphens("hello reetu"));


function addHyphens(str) {
    return str.replaceAll(" ", "-")
}
console.log(addHyphens("hello reetu"));
