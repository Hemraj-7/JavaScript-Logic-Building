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

// -----------------------------------------------------------------------------------------------------------

function isStrongPassword(passwordString) {
  passwordString = passwordString.trim();
  if (passwordString.length < 8) {
    return false;
  }

  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const spacialChars = "!@";

  let lowerCaseCharsExists = false;
  let upperCaseCharsExists = false;
  let numbersExists = false;
  let spacialCharsExists = false;

  for (let char of passwordString) {
    console.log(char);
    if (lowerCaseChars.includes(char)) {
      lowerCaseCharsExists = true;
    } else if (upperCaseChars.includes(char)) {
      upperCaseCharsExists = true;
    } else if (numbers.includes(char)) {
      numbersExists = true;
    } else if (spacialChars.includes(char)) {
      spacialCharsExists = true;
    }
  }

  console.log("lowerCaseCharsExists", lowerCaseCharsExists);
  console.log("upperCaseCharsExists", upperCaseCharsExists);
  console.log("numbersExists", numbersExists);
  console.log("spacialCharsExists", spacialCharsExists);

  if (
    lowerCaseCharsExists &&
    upperCaseCharsExists &&
    numbersExists &&
    spacialCharsExists
  ) {
    return true;
  }
  return false;
}

console.log(isStrongPassword("HEmsa@123"));
