// function transposeMatrix(matrix) {
//   console.log(matrix);
//   let row = 0;
//   let newMatrix = [];
//   console.log("newMetrix", newMatrix);
//   // let maxLengthOfArray = 0;
//   // console.log(maxLengthOfArray);
//   for (let i = 0; i < matrix.length; i++) {
//     console.log(i);
//     // maxLengthOfArray = matrix[i].length;
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log("this is j", j, matrix[i][j++]);
//       newMatrix[row] = matrix[i] = matrix[i][j++];
//       row++;
//     }
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log("this is j", j, matrix[i][j + 1]);
//       newMatrix[row] = matrix[i] = matrix[i][j + 1];
//       row++;
//     }
//   }
//   console.log("newMetrix", newMatrix);
// }

// transposeMatrix([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);
// transposeMatrix([
//   ["a", "b"],
//   ["c", "d"],
//   ["e", "f"],
// ]);

// --------------------------------------------------------------------------------------------------------------------------------
// Answer by Yt video ->
function transposeMatrix(inputArray) {
  console.log(inputArray);
  const numbersOfRows = inputArray.length;
  const numbersOfColumns = inputArray[0].length;
  const result = [];

  // console.log("rows and columns are : ", numbersOfRows, numbersOfColumns);
  for (let i = 0; i < numbersOfRows; i++) {
    console.log(inputArray[i]);
    for (let j = 0; j < numbersOfColumns; j++) {
      console.log(inputArray[i][j]);
      if (!result[j]) {
        result[j] = [];
      }
      result[j][i] = inputArray[i][j];
    }
  }

  return result;
}

const inputMatrix = [
  [3, 4, 8],
  [5, 6, 9],
];

console.log(transposeMatrix(inputMatrix));

const inputMatrix1 = [
  [1, 2],
  [3, 4],
  [5, 6],
]
console.log(transposeMatrix(inputMatrix1));
