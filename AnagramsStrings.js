function isAnagramString(inputString1, inputString2) {
  console.log(inputString1, inputString2);

  if (typeof inputString1 !== "string") {
    throw new Error("Only String are allowed in the Input.");
  }

  if (typeof inputString2 !== "string") {
    throw new Error("Only String are allowed in the Input.");
  }

  inputString1 = inputString1.toLowerCase();
  inputString2 = inputString2.toLowerCase();
  inputString1 = inputString1.split("").sort();
  inputString2 = inputString2.split("").sort();
  console.log(inputString1, inputString2);

  if (inputString1.length === inputString2.length) {
    for (let i = 0; i < inputString1.length; i++) {
      console.log(inputString1[i], inputString2[i]);
      if (inputString2[i].includes(inputString1[i])) {
        console.log("Yes available", inputString1[i]);
      } else {
        console.log("Im not avaiable in the both String", inputString1[i]);
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isAnagramString("pools", "spool"));
console.log(isAnagramString("pools", "spoil"));
console.log(isAnagramString("poOl  s", "spo  ol"));

// --------------------------------------------------------------------------------------------------------------------
// Solution by Yt video ->

console.log(
  "----------------------------------------------------------------------"
);

function areAnagrams(s1, s2) {
  //   console.log(s1, s2);

  if (typeof s1 !== "string" && typeof s2 !== "string") {
    throw new Error("Only Strings are allowed in input");
  }

  if (s1.length !== s2.length) {
    return false;
  }

  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const charsInS1 = {};
  for (let char of s1) {
    // if (!charsInS1[char]) {
    //   charsInS1[char] = 0;
    // }
    // charsInS1[char] = charsInS1[char] + 1;
    charsInS1[char] = (charsInS1[char] || 0) + 1; // through sort cirkiting.
  }
  console.log(charsInS1);

  const charsInS2 = {};
  for (let char of s2) {
    if (!charsInS2[char]) {
      charsInS2[char] = 0;
    }
    charsInS2[char] = charsInS2[char] + 1;
    // console.log(char);
  }
  console.log(charsInS2);

  for (let key in charsInS1) {
    // console.log(key)
    if (charsInS1[key] !== charsInS2[key]) {
      return false;
    }
  }

  return true;
}

console.log("spool pools", areAnagrams("spool", "pools"));
console.log("thing night", areAnagrams("thing", "night"));
console.log("Act cat", areAnagrams("Act", "cat"));
console.log("A ct ca t", areAnagrams("A ct", "ca t"));
console.log("Hemsa raj", areAnagrams("Hemsa", "raj"));
