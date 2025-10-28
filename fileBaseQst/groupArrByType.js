
let arr = [
  42,
  "hello",
  true,
  null,
  undefined,
  [1, 2, 3],
  { name: "Reetu" },
  function () {},
  Symbol("id"),
  9007199254740991n,
];

function groupArrByType(arr) {
  return arr.reduce((acc, item) => {
    // console.log(item);

    let type;

    if (item === null) {
      type = "null";
    } else if (Array.isArray(item)) {
      type = "array";
    } else {
      type = typeof item;
    }
 
    (acc[type] = acc[type] || []).push(item);
    return acc;
  }, {});
}

console.log(groupArrByType(arr));
