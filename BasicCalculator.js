const prompt = require("prompt-sync")();

function calculate() {
  let operationSymbols = ["+", "-", "*", "/"];
  let selectOperation = prompt(
    "Choose the Operation. \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division: ",
  );
  selectOperation = parseInt(selectOperation);
  if (
    !Number.isInteger(selectOperation) ||
    selectOperation < 1 ||
    selectOperation > 4
  ) {
    throw new Error(
      "Invalid operation selected or something wrong in the operation selection.",
    );
  }

  let firstNumber = prompt("Enter the first Number: ");
  let secondNumber = prompt("Enter the Second Number: ");
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  if (!Number(firstNumber) || !Number(secondNumber)) {
    throw new Error(
      "Only numbers value are allowed in the first and second numbers.",
    );
  }

  console.log(selectOperation, firstNumber, secondNumber);

  if (selectOperation === 1) {
    return console.log(
      `${firstNumber} ${operationSymbols[0]} ${secondNumber} = `,
      firstNumber + secondNumber,
    );
  } else if (selectOperation === 2) {
    return console.log(
      `${firstNumber} ${operationSymbols[1]} ${secondNumber} = `,
      firstNumber - secondNumber,
    );
  } else if (selectOperation === 3) {
    return console.log(
      `${firstNumber} ${operationSymbols[2]} ${secondNumber} = `,
      firstNumber * secondNumber,
    );
  } else {
    return console.log(
      `${firstNumber} ${operationSymbols[3]} ${secondNumber} = `,
      firstNumber / secondNumber,
    );
  }
}

// calculate();

// Answered by Yt Video!!

let exit = false;

while (!exit) {
  let userChoice = prompt(`Please select one of the below options
  1. Press 1 for Addition
  2. Press 2 for Subtraction
  3. Press 3 for Multiplication
  4. Press 4 for Division
  5. Press 5 for Exit:
  `);

  userChoice = parseInt(userChoice);

  switch (userChoice) {
    case 1:
      console.log("Addition");
      const userInputForAddition = acceptTowNumbers();
      const resultAddition =
        userInputForAddition.firstNumber + userInputForAddition.secondNumber;
      console.log(
        `${userInputForAddition.firstNumber} + ${userInputForAddition.secondNumber} = ${resultAddition}`,
      );
      break;
    case 2:
      console.log("Subtraction");
      const userInputForSubtraction = acceptTowNumbers();
      const resultSubtraction =
        userInputForSubtraction.firstNumber -
        userInputForSubtraction.secondNumber;
      console.log(
        `${userInputForSubtraction.firstNumber} - ${userInputForSubtraction.secondNumber} = ${resultSubtraction}`,
      );
      break;
    case 3:
      console.log("Multiplication");
      const userInputForMultiplication = acceptTowNumbers();
      const resultMultiplication =
        userInputForMultiplication.firstNumber *
        userInputForMultiplication.secondNumber;
      console.log(
        `${userInputForMultiplication.firstNumber} * ${userInputForMultiplication.secondNumber} = ${resultMultiplication}`,
      );
      break;
    case 4:
      console.log("Division");
      const userInputForDivision = acceptTowNumbers();
      const resultDivision =
        userInputForDivision.firstNumber / userInputForDivision.secondNumber;
      console.log(
        `${userInputForDivision.firstNumber} / ${userInputForDivision.secondNumber} = ${resultDivision}`,
      );
      break;
    case 5:
      console.log("Exit");
      exit = true;
      break;
    default:
      console.log("Wrong Choice");
      break;
  }
}

console.log("Thanks for using the calculator!")

function acceptTowNumbers() {
  let firstNumber = parseFloat(prompt("Please Enter the first number: "));
  let secondNumber = parseFloat(prompt("Please Enter the second number: "));
  return { firstNumber, secondNumber };
}
