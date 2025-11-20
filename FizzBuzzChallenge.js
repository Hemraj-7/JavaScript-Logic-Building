function FizzBuzz(inputNumber) {
  //   console.log(inputNumber);
  if (typeof inputNumber !== "number") {
    throw new Error("Only Positive Numbers are allowed");
  }

  if (inputNumber < 1) {
    throw new Error("Only Positive numbers are allowed");
  }

  let arr = [];
  for (let i = 1; i <= inputNumber; i++) {
    // arr.push(i);
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(FizzBuzz(16));
console.log(FizzBuzz(1));
console.log(FizzBuzz(36));
