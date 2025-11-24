function checkIsAlphabetOrder(inputString) {
  if (typeof inputString !== "string") {
    throw new Error("Only string are allowed.");
  }

  inputString = inputString.toLowerCase();
  inputString = inputString.replaceAll(" ", "");

  if (!/^[a-z]+$/.test(inputString)) {
    console.error(
      "Validation failed: contains invalid characters",
      inputString
    );
    throw new Error("Only String allowed, form A to Z and a to z only");
  }

  console.log(inputString);
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let alphabetsArray = alphabets.split("");

  let result = true;
  for (let i = 0; i < inputString.length; i++) {
    console.log(i, inputString[i]);
    if (alphabetsArray.includes(inputString[i])) {
      console.log("im available: ", inputString[i]);
      let index = alphabetsArray.indexOf(inputString[i]);
      console.log("this is my index: ", index);
      alphabetsArray = alphabetsArray.slice(index);
      console.log(alphabetsArray);
    } else {
      console.log("im not avaiable in the array: ", inputString[i]);
      result = false;
      break;
    }
  }
  return result;
}

console.log("abcdefg", checkIsAlphabetOrder("abcdefg"));
console.log("xyzz", checkIsAlphabetOrder("xyzz"));
console.log("abacdefg", checkIsAlphabetOrder("abacdefg"));
console.log("xyzza", checkIsAlphabetOrder("Xyzza"));
console.log(" x yz", checkIsAlphabetOrder(" x  yz"));
console.log("hemsa", checkIsAlphabetOrder("Hemsa"));
// console.log("xyza1", checkIsAlphabetOrder("xyza1")); // throw an Error bcz test the character
// console.log("xyza%", checkIsAlphabetOrder("xyza%")); // throw an Error bcz test the character

// -------------------------------------------------------------------------------------------------------------------------------------
// answer through YT video ->
console.log("a".charCodeAt());
console.log("b".charCodeAt());
console.log("z".charCodeAt());

console.log("A".charCodeAt());
console.log("Z".charCodeAt());

console.log("a" < "b");
console.log("b" < "a");

function isStirngInAlphabeticOrder(inputString) {
  for (let i = 0; i < inputString.length - 1; i++) {
    console.log(inputString[i], inputString[i + 1]);
    if (inputString[i] > inputString[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isStirngInAlphabeticOrder("abc"));
console.log(isStirngInAlphabeticOrder("abcxa"));
