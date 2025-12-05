function isPasswordStrong(inputString) {
  console.log(inputString);

  if (typeof inputString !== "string") {
    throw new Error("Only String Passwords are allowed");
  }

  let smallChars = "abcdefghijklmnopqrstuvwxyz";
  let bigChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let spacialChars = "!@";

  let passCases = 0;

  if (inputString.length > 7) {
    for (let i = 0; i < smallChars.length; i++) {
      console.log(i, smallChars[i]);
      if (inputString.includes(smallChars[i])) {
        console.log("yes im available :", smallChars[i]);
        passCases++;
        break;
      }
    }
    for (let i = 0; i < bigChars.length; i++) {
      console.log(i, bigChars[i]);
      if (inputString.includes(bigChars[i])) {
        console.log("Yes Im available: ", bigChars[i]);
        passCases++;
        break;
      }
    }
    for (let i = 0; i < numbers.length; i++) {
      console.log(i, numbers[i]);
      if (inputString.includes(numbers[i])) {
        console.log("Yes Im available: ", numbers[i]);
        passCases++;
        break;
      }
    }
    for (let i = 0; i < spacialChars.length; i++) {
      console.log(i, spacialChars[i]);
      if (inputString.includes(spacialChars[i])) {
        console.log("Yes Im available: ", spacialChars[i]);
        passCases++;
        break;
      }
    }
  }
  console.log(passCases);

  return passCases === 4;
}

console.log(isPasswordStrong("Hello!123"));
console.log(isPasswordStrong("Hello!"));
console.log(isPasswordStrong("Hello Ji 123"));
console.log(isPasswordStrong("hellosarkar"));
