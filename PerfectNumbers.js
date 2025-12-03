function isPerfectNumber(inputNumber) {
  if (typeof inputNumber !== "number") {
    throw new Error("Only numbers are valid");
  }
  if (inputNumber < 1) {
    throw new Error("Only Positive integers are allowed");
  }
  console.log(inputNumber);
  let divisibleNumbers = [];
  let total = 0;
  let result = false;
  for (let i = 1; i < inputNumber; i++) {
    // console.log(i);
    if (inputNumber % i === 0) {
      divisibleNumbers.push(i);
    }
  }
  for (let i = 0; i < divisibleNumbers.length; i++) {
    total += divisibleNumbers[i];
  }
  if (inputNumber === total) {
    result = true;
  }
  console.log(divisibleNumbers, total);
  return result;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(20));
console.log(isPerfectNumber(1));
// console.log(isPerfectNumber("xi"));

// ---------------------------------------------------------------------------------------------------------------

function isPerfectNumber1(inputNumber) {
  const properDivisors = [];
  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      // console.log(`${i} is proper divisor`);
      properDivisors.push(i);
    }
  }
  console.log(properDivisors);

  let sum = 0;
  properDivisors.forEach((d) => {
    sum = sum + d;
  });
  console.log("Sum is ", sum);

  const sum1 = properDivisors.reduce((acc, d) => {
    acc += d;
    return acc;
  }, 0);
  console.log("Sum 1 is ", sum1);

  // if (sum === inputNumber) {
  //   return true;
  // }

  // return false;
  return sum === inputNumber;
}

console.log(isPerfectNumber1(6));
console.log(isPerfectNumber1(5));
