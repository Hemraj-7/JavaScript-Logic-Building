function getFectorial(inputPositiveInteger) {

    if (typeof inputPositiveInteger !== 'number') {
        throw new Error('Only Positive Number valids')
    }

    if (inputPositiveInteger < 0) {
        throw new Error('Enter Only Positive Number')
    }

    // console.log(inputPositiveInteger);
    let factorial = 1;
    for (let i = inputPositiveInteger; i >= 1; i--) {
        factorial *= i;
    }
    // console.log(factorial)
    return factorial;
}

console.log(getFectorial(0))
console.log(getFectorial(1))
console.log(getFectorial(2))
console.log(getFectorial(5))
// console.log(getFectorial(-5))
// console.log(getFectorial('s'))


// --------------------------------------------------------------------------------------------------------------
// Answer by sir using recursion function
function calculateFactorialUsingRecursion(inputNumber) {

    console.log('inputNmber is ', inputNumber);
    
    if (typeof inputNumber !== 'number') {
        throw new Error("Enter Only Positive Integer Number");
    }
    
    if (inputNumber < 0) {
        throw new Error("Input number should be greater than or equal to Zero");
    }
    
    if (inputNumber === 0 || inputNumber === 1) {
        return 1;
    }
    
    return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
    // return 4 * calculateFactorialUsingRecursion(3); 4 * 6
    // return 3 * calculateFactorialUsingRecursion(2); 3 * 2
    // return 2 * calculateFactorialUsingRecursion(1); 2 * 1

}

// console.log(calculateFactorialUsingRecursion(0))
// console.log(calculateFactorialUsingRecursion(1))
// console.log(calculateFactorialUsingRecursion(2))
// console.log(calculateFactorialUsingRecursion(5))
// console.log(calculateFactorialUsingRecursion(-5))
// console.log(calculateFactorialUsingRecursion('s'))
console.log(calculateFactorialUsingRecursion(4))