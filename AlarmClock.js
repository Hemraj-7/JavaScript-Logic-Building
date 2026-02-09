const prompt = require("prompt-sync")();

function alarmClock(inputHour, inputMinute) {
  inputHour = parseInt(inputHour);
  inputMinute = parseInt(inputMinute);

  console.log(inputHour, inputMinute);

  const currentDate = new Date();
  console.log(currentDate);
  console.log(
    currentDate.getDay(),
    currentDate.getDate(),
    currentDate.getMonth(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getMilliseconds(),
  );

  const newDate = new Date();
  newDate.setHours(inputHour);
  newDate.setMinutes(inputMinute);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

  console.log(
    "this is user defined time",
    newDate,
    newDate.getHours(),
    newDate.getMinutes(),
  );

  let remainingTime = newDate.getTime() - currentDate.getTime();
  console.log(remainingTime);

  setTimeout(() => {
    console.log("Alarm Strated");
  }, remainingTime);
}

const hours = prompt("Enter the Hours: ");
const minutes = prompt("Enter the minutes: ");

// alarmClock(14, 30);
alarmClock(hours, minutes);
