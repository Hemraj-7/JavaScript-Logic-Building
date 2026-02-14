const prompt = require("prompt-sync")();

let list = [];

let exit = false;
while (!exit) {
  const userChoice = parseInt(
    prompt(`Please select one of the below option.
    1. Press 1 for Add an Item
    2. Press 2 for See the List
    3. Press 3 for Delete an Item
    4. Press 4 for Exit:`),
  );

  console.log(userChoice);

  if (userChoice === 4) {
    exit = true;
  } else if (userChoice === 1) {
    const userInput = prompt("Enter your To-do: ");
    list.push(userInput);
    console.log("Item Added Successfully!!");
  } else if (userChoice === 2) {
    console.log("Your To-Do List!!");
    if (list.length > 0) {
      list.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    } else {
      console.log("List is Empty!!");
    }
  } else if (userChoice === 3) {
    if (list.length === 0) {
      console.log(
        "List is already Empty! No one item is available to delete!!",
      );
    } else {
      const selectItem = parseInt(
        prompt(
          "Please Enter the number of todo item which you want to delete: ",
        ),
      );
      if (selectItem > 0 || selectItem <= list.length) {
        list.splice(selectItem - 1, 1);
        console.log("Item Deleted Successfully!!");
      } else {
        console.log("Invalid item number");
      }
    }
  } else {
    console.log("Invalid Choice!! Please Try Again!");
  }
}

console.log(list);
