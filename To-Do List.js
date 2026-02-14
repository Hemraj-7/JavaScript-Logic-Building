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

// Solution by the Yt video->

// const toDoItems = [];

// toDoItems.push("Go for a walk");

// toDoItems.push("Clean the floor");

// toDoItems.push("Go for an Interview");

// console.log(toDoItems);

// toDoItems.forEach((item) => {
//   console.log(item);
// });

// toDoItems.splice(1, 1);

// console.log(toDoItems);

const toDoItems = [];

let exits = false;

while (!exits) {
  const usersChoice = parseInt(
    prompt(`You have below options
            1. Press 1 to Add To Do item
            2. Press 2 to see all the items
            3. Press 3 to remove an item
            4. Press 4 to Exit`),
  );

  console.log(usersChoice);

  switch (usersChoice) {
    case 1:
      console.log("Addition");
      const userItem = prompt("Please Enter the To Do item: ");
      toDoItems.push(userItem);
      console.log(toDoItems);
      break;
    case 2:
      console.log("Your To Do List!");
      printAllItems();
      break;
    case 3:
      printAllItems();
      const itemToDelete = prompt(
        "Please tell the item number that you want to delete: ",
      );
      console.log("Before delete", toDoItems);
      toDoItems.splice(itemToDelete - 1, 1);
      console.log("After delete", toDoItems);
      break;
    case 4:
      exits = true;
      break;
    default:
      console.log("Invalid Selection!! Please try Again.");
      break;
  }
}

function printAllItems() {
  let counter = 1;
  toDoItems.forEach((item) => {
    console.log(`${counter}. ${item}`);
    counter++;
  });
}

console.log("Thanks for using the ToDo list app");
