function countCharacters(inputString) {
  if (typeof inputString !== "string") {
    throw new Error("Only Strings are allowed");
  }

  console.log(inputString);
  const charactersObj = {};

  inputString = inputString.toLowerCase();

  for (let i = 0; i < inputString.length; i++) {
    // console.log(i, inputString[i]);
    // charactersObj[inputString[i]] = 1;

    if (charactersObj.hasOwnProperty(inputString[i])) {
      charactersObj[inputString[i]] += 1;
    } else {
      charactersObj[inputString[i]] = 1;
    }
  }

  console.log(charactersObj);
}

countCharacters("Hem Raj Mali");
countCharacters("hello! My Dear Bhati ji");

// ----------------------------------------------------------------------------------------------------------------
// another way

function countCharacters2(inputString) {
  const result = {};
  inputString = inputString.toLowerCase();
  console.log("result before ", result);
  
  for (let i = 0; i < inputString.length; i++) {
    if (!result[inputString[i]]) {
      result[inputString[i]] = 0;
    }
    result[inputString[i]] = result[inputString[i]] + 1;
  }
  console.log("result after ", result);
}

countCharacters2("Hem Raj Mali 1");


// ----------------------------------------------------------------------------------------------------------------
// another way

function countCharacters3(inputString){
  inputString = inputString.toLowerCase();
  const splittedInputString = inputString.split('');
  console.log(splittedInputString);

  const result = splittedInputString.reduce((acc, char)=>{
    if(!acc[char]){
      acc[char] = 0;
    }
    acc[char] = acc[char] + 1;
    return acc;
  }, {});

  return result;
}

console.log(countCharacters3("Hem Raj Mali"))