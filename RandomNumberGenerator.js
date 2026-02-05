function randomNumber(maxNum) {
  //   console.log(maxNum);

  const random = Math.random();
  let randomNumber = Math.floor(random * maxNum);

  //   console.log(random, randomNumber)
  return randomNumber;
}

console.log(randomNumber(999));

// ------------------------------------------------------

const maxNum = 5;
console.log(Math.floor(Math.random() * maxNum) + 1);

let i = 0;
while (i < 20) {
  console.log(Math.floor(Math.random() * maxNum) + 1);
  i++;
}

const minimumNumber = 11; // included
const maximumNumber = 21; // don't include

console.log("between", minimumNumber, maximumNumber);

console.log(
  Math.floor(Math.random() * (maximumNumber - minimumNumber)) + minimumNumber,
);

let j = 0;
while (j < 20) {
  console.log(
    Math.floor(Math.random() * (maximumNumber - minimumNumber)) + minimumNumber,
  );
  j++;
}
