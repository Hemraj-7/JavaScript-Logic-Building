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

// ------------------------------------------------------------------------------------------
// Answer by yt channel

function setAlarm(hour, minute) {
  console.log(hour, minute);

  const now = new Date();
  const alarmDate = new Date();
  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);
  alarmDate.setSeconds(0);
  alarmDate.setMilliseconds(0);
  const difference = alarmDate - now;
  if (difference < 0) {
    console.log("Please provide future time.");
    return;
  }

  setTimeout(() => {
    console.log("Time is up! Alarm Alarm Alarm");
  }, difference);

  console.log(now, alarmDate, difference);
}

// let hour = null;
// while (hour === null) {
//   hour = prompt("What hour should the alram go off?: ");
//   hour = parseInt(hour);
//   if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
//     console.log(
//       "Please enter a valid value for hour. Hour should be a positive integer between o to 23",
//     );
//     hour = null;
//   }
// }

// let minute = null;
// while (minute === null) {
//   minute = prompt("What minute should the alram go off?: ");
//   minute = parseInt(minute);
//   if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
//     console.log(
//       "Please enter a valid value for minute. Minute should be a positive integer between o to 59",
//     );
//     minute = null;
//   }
// }

function acceptInputFromUser(promptMessage, maxValue, invalidValueMessage) {
  let result = null;
  while (result === null) {
    result = prompt(promptMessage);
    result = parseInt(result);
    if (!Number.isInteger(result) || result < 0 || result > maxValue) {
      console.log(invalidValueMessage);
      result = null;
    }
  }
  return result;
}

let hour = acceptInputFromUser(
  "What hour should the alram go off?: ",
  23,
  "Please enter a valid value for hour. Hour should be a positive integer between o to 23",
);

let minute = acceptInputFromUser(
  "What minute should the alram go off?: ",
  59,
  "Please enter a valid value for minute. Minute should be a positive integer between o to 59",
);

console.log(setAlarm(hour, minute));
