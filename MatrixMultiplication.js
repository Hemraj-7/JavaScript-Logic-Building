// Answer by Yt video...
function matrixMultiplication(array1, array2) {
  //   console.log(array1, array2);
  const rowsInResult = array1.length;
  const columnsInResult = array2[0].length;
  const rowsInSecondArray = array2.length;
  // console.log(rowsInResult, columnsInResult, rowsInSecondArray);

  const result = [];

  for (let i = 0; i < rowsInResult; i++) {
    for (let j = 0; j < columnsInResult; j++) {
      //   console.log(i, j);
      let cellValue = 0;
      for (let n = 0; n < rowsInSecondArray; n++) {
        cellValue = cellValue + array1[i][n] * array2[n][j];
      }
      if (!result[i]) {
        result[i] = [];
      }
      result[i][j] = cellValue;
    }
  }
  return result;
}

// const firstArray = [
//   [1, 2],
//   [3, 4],
// ];

// const secondArray = [
//   [5, 6],
//   [7, 8],
// ];

const firstArray = [
  [1, 2, 3],
  [3, 4, 8],
];

const secondArray = [
  [5, 6],
  [7, 8],
  [7, 9],
];

console.log(matrixMultiplication(firstArray, secondArray));
