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

calculate();
