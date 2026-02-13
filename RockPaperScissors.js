const prompt = require("prompt-sync")();

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
