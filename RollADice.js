const prompt = require("prompt-sync")();

function randomNumber(range) {
  let randomNum = Math.floor(Math.random() * range + 1);
  return randomNum;
}

function rollDice() {
  //   console.log(numbersOfDice, sidesOfDice);

  let numbersOfDice = prompt("Enter the numbers of dice: ");
  let sidesOfDice = prompt("Enter the numbers of Sides: ");

  numbersOfDice = parseInt(numbersOfDice);
  sidesOfDice = parseInt(sidesOfDice);

  if (typeof numbersOfDice !== "number") {
    throw new Error("Numbers of dice are required numbers only");
  }

  if (typeof sidesOfDice !== "number") {
    throw new Error("Sides of dice are required numbers only");
  }

  if (numbersOfDice < 1 || numbersOfDice > 4) {
    throw new Error("Numbers of dice value is allowed between 1 to 4");
  }

  if (sidesOfDice < 1 || sidesOfDice > 6) {
    throw new Error("Sides of dice value is also allowed between 1 to 6");
  }

  console.log(numbersOfDice, sidesOfDice);

  let arrayOfResult = [];

  for (let i = 0; i < numbersOfDice; i++) {
    console.log(i);
    arrayOfResult.push(randomNumber(sidesOfDice));
  }

  return arrayOfResult;
}

// console.log(randomNumber(5));
console.log(rollDice());
