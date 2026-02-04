// solution by me
function findAllWordOccurrences(inputString, inputFindWord) {
  console.log(inputString, inputFindWord);
  console.log(inputString.length);

  //   inputString.trim();
  inputString = inputString.toLowerCase();
  const words = inputString.split(" ");

  const wordsLocation = [];
  let joinword = "";
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    joinword += words[i] + " ";
    if (words[i] === inputFindWord) {
      // console.log('this is the word = ', words[i])
      //   wordsLocation.push(joinword, joinword.length - inputFindWord.length - 1);
      wordsLocation.push(joinword.length - inputFindWord.length - 1);
    }
  }

  return wordsLocation;
}

console.log(
  findAllWordOccurrences(
    "This is a big String with the word big repeated in the big string.",
    "big",
  ),
);

console.log(
  "----------------------------------------------------------------------------------------------",
);
// Solution by YT video
const bigString =
  "This is a big String with the word big repeated in the big string.";
const wordToFind = "big";

console.log(bigString.indexOf("hem"));
console.log(bigString.indexOf("big"));
console.log(bigString.indexOf("big", 11));
console.log(bigString.indexOf("big", 36));

function FindAllOccurrences(big, word) {
  console.log(big, word);

  const result = [];
  let index = big.indexOf(word);

  while (index !== -1) {
    result.push(index);
    index = big.indexOf(word, index + 1);
  }

  return result;
}

console.log(FindAllOccurrences(bigString, wordToFind));
console.log(FindAllOccurrences(bigString, "hemsa"));
console.log(FindAllOccurrences("hemsa", "hemsa"));
