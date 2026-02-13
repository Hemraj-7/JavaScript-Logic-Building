const prompt = require("prompt-sync")();

// Solution by Me!! ->

let exit = false;

while (!exit) {
  let array = ["Rock", "Paper", "Scissor"];

  const random = Math.floor(Math.random() * 3);
  console.log(random);

  console.log(array[random]);

  let userInput = parseInt(
    prompt(`Please select the one of the below option
    1. Press 1 for Rock
    2. Press 2 for Paper
    3. Press 3 for Scissor
    4. Press 4 for Exit:`),
  );

  switch (userInput) {
    case 1:
      console.log("You Choose Rock");
      if (random == 0) {
        console.log(
          `Match Tie!, No one is Winner! Your selection is Rock and Computer selection is ${array[random]}`,
        );
      } else if (random == 1) {
        console.log(
          `You Lost!, Computer Win! Your selection is Rock and Computer selection is ${array[random]}`,
        );
      } else {
        console.log(
          `Congratulation!! you Win! Your selection is Rock and Computer selection is ${array[random]}`,
        );
      }
      break;
    case 2:
      console.log("You Choose Paper");
      if (random == 0) {
        console.log(
          `Congratulation!! you Win! Your selection is Paper and Computer selection is ${array[random]}`,
        );
      } else if (random == 1) {
        console.log(
          `Match Tie!, No one is Winner! Your selection is Paper and Computer selection is ${array[random]}`,
        );
      } else {
        console.log(
          `You Lost!, Computer Win! Your selection is Paper and Computer selection is ${array[random]}`,
        );
      }
      break;
    case 3:
      console.log("You Choose Scissor");
      if (random == 0) {
        console.log(
          `You Lost!, Computer Win! Your selection is Scissor and Computer selection is ${array[random]}`,
        );
      } else if (random == 1) {
        console.log(
          `Congratulation!! you Win! Your selection is Scissor and Computer selection is ${array[random]}`,
        );
      } else {
        console.log(
          `Match Tie!, No one is Winner! Your selection is Scissor and Computer selection is ${array[random]}`,
        );
      }
      break;
    case 4:
      console.log("Exit!");
      exit = true;
      break;
    default:
      console.log("Wrong Selection!");
      break;
  }
}

// Solution by YT Video!! ->

const rock = 1;
const paper = 2;
const scissors = 3;

const names = {
  1: "ROCK",
  2: "PAPER",
  3: "SCISSORS",
};

let exits = false;
let userScore = 0;
let computerScore = 0;

while (!exits) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  console.log(computerChoice);

  const userChoice = parseInt(
    prompt(`Please select one of the below options
  1. Press 1 for ROCK
  2. Press 2 for PAPER
  3. Press 3 for SCISSORS
  4. Press 4 for Exit:
  `),
  );

  if (userChoice === 4) {
    exits = true;
  } else if (!Number.isInteger(userChoice) || userChoice < 1 || userChoice > 4) {
    console.log("Invalid Choice!! Try Again!");
  } else if (userChoice === computerChoice) {
    console.log("Its a tie!! Your Both choice is same : ", names[userChoice]);
  } else if (
    (userChoice === rock && computerChoice === scissors) ||
    (userChoice === paper && computerChoice === rock) ||
    (userChoice === scissors && computerChoice === paper)
  ) {
    userScore++;
    console.log(
      "You Win!!",
      "Your choice is : ",
      names[userChoice],
      "& Computer choice is : ",
      names[computerChoice],
    );
  } else {
    computerScore++;
    console.log(
      "Computer Win!!",
      "Your choice is : ",
      names[userChoice],
      "& Computer choice is : ",
      names[computerChoice],
    );
  }

  console.log(computerChoice, userChoice);
}

console.log("Thanks for Playing!!");
console.log("End Score is User: ", userScore, " Computer: ", computerScore);
