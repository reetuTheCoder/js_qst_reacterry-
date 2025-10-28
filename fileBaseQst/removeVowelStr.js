let str = "javascript";

function removeVowelStr(str) {
  let vowel = "aeiouAEIOU";
  let output = "";

  for (const char of str) {
    if (!vowel.includes(char)) {
      output += char;
    }
  }

  return output;
}

// console.log(removeVowelStr(str));

function removeVowelStr(str) {
  return str.replace(/[aeiou]/gi, "");
}

// console.log(removeVowelStr("str"));

function removeVowelStr(str) {
  let vowel = "aeiouAEIOU";

  return [...str].filter((ele) => !vowel.includes(ele)).join("");
}

console.log(removeVowelStr(str));
