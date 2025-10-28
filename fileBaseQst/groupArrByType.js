
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
 
    (acc.grouped[type] = acc.grouped[type] || []).push(item); // here i grouped all types

    acc.counts[type] = (acc.counts[type] || 0) + 1
    return acc;
  }, {grouped : {}, counts: {}});
}

console.log(groupArrByType(arr));
