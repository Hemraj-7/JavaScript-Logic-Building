function maximumElementInArray(arr) {
    // console.log(arr,arr.length);
    let maximumNum = arr[0];
    // console.log(arr[0]);
    for (let i = 0; i <= arr.length; i++) {
        if (maximumNum < arr[i]) {
            maximumNum = arr[i]
            // console.log(arr[i]);
        }
    }
    return maximumNum;
}

console.log('maximumElementInArray([3,6,1,8,3,7])', maximumElementInArray([3, 6, 1, 8, 3, 7]))
console.log('maximumElementInArray([7,84,16,38,45,76])', maximumElementInArray([7, 84, 16, 38, 45, 76]))
console.log('maximumElementInArray([21,3454,23423,4334,22232, 1002,-242246])', maximumElementInArray([21, 3454, 23423, 4334, 22232, 1002, -242246]))


console.log('thorugh array sorting');
function maximumElementInArray2(arr){
    console.log(arr)
    arr.sort()
    console.log(arr)
    return arr[arr.length - 1]
}
console.log('maximumElementInArray([3,6,1,8,3,7])', maximumElementInArray2([3, 6, 1, 8, 3, 7]))
console.log('maximumElementInArray([7,84,16,38,45,76])', maximumElementInArray2([7, 84, 16, 38, 45, 76]))
console.log('maximumElementInArray([21,3454,23423,4334,22232, 1002,-242246])', maximumElementInArray2([21, 3454, 23423, 4334, 22232, 1002, -242246])) // it is not giving right answer



// --------------------------------------------------------------------------------------------------------------

function findTheBiggestNumber(arrayOfNumber){
    // console.log(arrayOfNumber)

    if(!arrayOfNumber || arrayOfNumber.length === 0){
        throw new Error('We need some numbers in the array');
    }

    if(!Array.isArray(arrayOfNumber)){
        throw new Error("Expected an Array")
    }

    for(const val of arrayOfNumber){
        if(typeof val !== 'number'){
            throw new Error('In Array Only Numbers allowed')
        }
    }

    let biggestNumber = arrayOfNumber[0];
    for(let i = 1; i < arrayOfNumber.length; i++){
        // console.log(arrayOfNumber[i])
        if(arrayOfNumber[i] > biggestNumber){
            biggestNumber = arrayOfNumber[i];
        }
    }
    return biggestNumber;
}
console.log('findTheBiggestNumber([3,6,1,8,3,7])', findTheBiggestNumber([3, 6, 1, 8, 3, 7]))
// console.log('findTheBiggestNumber([])', findTheBiggestNumber([]))
// console.log('findTheBiggestNumber(null)', findTheBiggestNumber(null))
// console.log('findTheBiggestNumber(2)', findTheBiggestNumber(2))
// console.log('findTheBiggestNumber(2,3,4)', findTheBiggestNumber(2,3,4))
console.log('findTheBiggestNumber([2,3,4])', findTheBiggestNumber([2,3,4]))
// console.log('findTheBiggestNumber([2,3,4,"x"])', findTheBiggestNumber([2,3,4,"x"]))



function findTheBiggestNumber2(arrayOfNumber){

    let maxNum = Math.max(2,3,4,57,22,123);
    console.log(maxNum)

    let biggestNumber = Math.max(...arrayOfNumber);
    return biggestNumber;
}
console.log('findTheBiggestNumber2([3,6,1,8,3,7])', findTheBiggestNumber2([3, 6, 1, 8, 3, 7]))