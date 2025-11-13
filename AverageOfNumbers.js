function calculateAvg(inputArray) {

    // Check if input is actually an array
    if (!Array.isArray(inputArray)) {
        throw new Error('Enter only an Array');
    }

    // Check if array is not empty
    if (inputArray.length === 0) {
        throw new Error('Array cannot be empty');
    }

    // Ensure all elements are valid numbers (not NaN, not Infinity)
    for (const item of inputArray) {
        if (typeof item !== 'number' || Number.isNaN(item) || !Number.isFinite(item)) {
            throw new Error('Array must contain only valid finite numbers');
        }
    }

    // all array element should be positive
    for(const item of inputArray){
        if(item < 1){
            throw new Error('All elements of the Array must be Greater than Zero!')
        }
    }

    console.log(inputArray);

    let total = 0;
    for (let i = 0; i < inputArray.length; i++) {
        // console.log(inputArray[i])
        total += inputArray[i]
    }
    // console.log(total)
    let avg = total / inputArray.length
    // console.log(avg)
    return avg;
}
console.log(calculateAvg([1, 2, 4]))
console.log(calculateAvg([1, 2, 7, 14]))
console.log(calculateAvg([1, 5, 7, 35]))
// console.log(calculateAvg([1, 2, 0]))
// console.log(calculateAvg([true]))
// console.log(calculateAvg([undefined]))
// console.log(calculateAvg([NaN]))
// console.log(calculateAvg(4))
// console.log(calculateAvg({ 1: 1, 2: 3, 2: 4 }))
// console.log(calculateAvg([]))
// console.log(calculateAvg(false))