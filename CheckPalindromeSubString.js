function CheckPalindromeSubString(inputString) {
  console.log(inputString);
  let subStrings = inputString.split(" ");
  const palindrome = [];
  for (let i = 0; i < subStrings.length; i++) {
    let reverseString = "";
    for (let j = subStrings[i].length - 1; j >= 0; j--) {
      console.log(subStrings[i][j]);
      reverseString += subStrings[i][j];
    }
    console.log("reverse string", reverseString);

    if (subStrings[i] === reverseString) {
      palindrome.push(subStrings[i]);
    }
  }
  console.log(subStrings);
  return palindrome;
}

console.log(CheckPalindromeSubString("hello! madam ji you are in radar"));

console.log(
  "-------------------------------------------------------------------------------",
);
// -----------------------------------------------------------------------------------------------
// answer by yt video

function isPalindrome(inputString) {
  for (let i = 0; i <= inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindromes(inputString) {
  console.log(inputString);
  const result = [];
  //   console.log("slice", inputString.slice(1, 4));
  for (let i = 0; i < inputString.length; i++) {
    //   console.log(i);
    for (let j = i + 1; j <= inputString.length; j++) {
      //   console.log(i, j);
      // console.log(inputString.slice(i, j));
      const substr = inputString.slice(i, j);
      if (isPalindrome(substr) && substr.length > 1) {
        if (!result.includes(substr)) {
          result.push(substr);
        }
        // result.push(substr);
      }
    }
  }
  return result;
}

console.log(findPalindromes("abcd"));
console.log(findPalindromes("hello! madam ji you are in radar"));
console.log(findPalindromes("radar"));
console.log(findPalindromes("madam"));
console.log(findPalindromes("ababapalindromemadam"));
