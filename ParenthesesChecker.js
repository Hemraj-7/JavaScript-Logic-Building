// answer by yt video

const parentheses = {
  "{": "}",
  "(": ")",
  "[": "]",
};
console.log(parentheses["("]);
console.log(parentheses["{"]);
console.log(parentheses["["]);

function isParenthesesBalanced(inputString) {
  console.log(inputString);
  const parenthesesArray = [];
  for (let char of inputString) {
    console.log(char);
    if (parentheses[char]) {
      parenthesesArray.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningParenthisis = parenthesesArray.pop();
      if (parentheses[lastOpeningParenthisis] !== char) {
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

console.log(isParenthesesBalanced("[{()}]"));
console.log(isParenthesesBalanced("[{()]"));
console.log(isParenthesesBalanced("{[]"));
