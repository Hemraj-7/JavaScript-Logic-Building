const prompt = require("prompt-sync")();

function GenerateARandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function guessANumber() {
  let num;
  const randomNumber = GenerateARandomNumber();
  let attempt = 0;

  //   console.log(randomNumber);
  while (num !== randomNumber) {
    num = prompt("Guess a Number between 1 to 100: ");
    num = parseInt(num);
    if (!Number.isInteger(num) || num < 1 || num > 100) {
      console.log("Invalid Guessing... Try Again");
    }
    console.log("your guessed number is : ", num);
    if (num > randomNumber) {
      if (num - 10 > randomNumber) {
        console.log(num, " is Too High number");
      } else {
        console.log(num, "is High number");
      }
    } else if (num < randomNumber) {
      if (num + 10 < randomNumber) {
        console.log(num, "is Too Low number");
      } else {
        console.log(num, "is Low number");
      }
    }
    attempt += 1;
  }

  console.log(`Congratulation! you win this game in ${attempt} attempts`);
}

guessANumber();
