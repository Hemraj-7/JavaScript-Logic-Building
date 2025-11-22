function numberPyramid(inputNumber) {
  //   console.log(inputNumber);

  if (typeof inputNumber !== "number") {
    throw new Error("Enter only Input Number");
  }

  if (inputNumber < 1) {
    throw new Error("Only Positive number allowed");
  }

  for (let i = 1; i <= inputNumber; i++) {
    let line = "";
    for (let j = 1; j <= inputNumber - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= i; k++) {
      line += k;
    }
    for (let l = i - 1; l >= 1; l--) {
      line += l;
    }
    console.log(line);
  }
}

numberPyramid(5);
numberPyramid(10);
numberPyramid(9);
// numberPyramid(-20);
// numberPyramid('ag');
// numberPyramid(null);