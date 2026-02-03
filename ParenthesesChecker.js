// answer by yt video

const parenthesis = {
  "{": "}",
  "(": ")",
  "[": "]",
};
console.log(parenthesis["("]);
console.log(parenthesis["{"]);
console.log(parenthesis["["]);

function isParenthesisBalanced(inputString) {
  console.log(inputString);
  const parenthesesArray = [];
  for (let char of inputString) {
    console.log(char);
    if (parenthesis[char]) {
      parenthesesArray.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningParenthisis = parenthesesArray.pop();
      if (parenthesis[lastOpeningParenthisis] !== char) {
        return false;
      }
    }
  }
  console.log(parenthesesArray);
  if (parenthesesArray.length === 0) {
    return true;
  }
  return false;
}

console.log(isParenthesisBalanced("[{()}]"));
console.log(isParenthesisBalanced("[{()]"));
console.log(isParenthesisBalanced("{[]"));
