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
  sidesOfDice = parseInt(numbersOfDice);

  if (typeof numbersOfDice !== "number") {
    throw new Error("Numbers of dice are required numbers only");
  }

  if (typeof sidesOfDice !== "number") {
    throw new Error("Sides of dice are required numbers only");
  }

  if (numbersOfDice < 1) {
    throw new Error("Numbers of dice value allowed grater then 0");
  } else if (sidesOfDice < 1) {
    throw new Error("Sides of dice value are allowed grater than 0");
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
