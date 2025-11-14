function isPrimeNumber(inputNumber) {

    if (typeof inputNumber !== 'number') {
        throw new Error('Enter only numbers in the input');
    }

    if (Number.isNaN(inputNumber)) {
        throw new Error('NaN not a number not allowed')
    }

    if (inputNumber < 1) {
        throw new Error('Input number must be greater than 0')
    }

    inputNumber = Math.floor(inputNumber);

    console.log('The ', inputNumber, ' is prime ?');

    let arr = [];
    for (let i = 1; i <= inputNumber; i++) {
        // console.log(i)
        if (inputNumber % i === 0) {
            arr.push(i)
        }
    }
    // console.log(arr);

    if (arr.length === 2) {
        return true;
    }
    else {
        return false;
    }
}

// true
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(97));
console.log(isPrimeNumber(101));
console.log(isPrimeNumber(102.5));
// false
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(98));
// throw an Error's
// console.log(isPrimeNumber(-5));
// console.log(isPrimeNumber(true));
// console.log(isPrimeNumber(undefined));
// console.log(isPrimeNumber(NaN));
// console.log(isPrimeNumber('98'));


// ------------------------------------------------------------------------------------------------------------------------------
// answer by Yt video by sir
function isPrime(inputNumber) {

    let result = true;
    for (let i = 2; i < inputNumber; i++) {
        console.log(inputNumber, "%", i, '=', inputNumber % i)
        if (inputNumber % i === 0) {
            result = false;
            break; // when first come end the code for better optimization
        }
    }
    return result;

}
console.log('5', isPrime(5));
console.log('97', isPrime(97))
console.log('2', isPrime(2));


// Optimized way
function isPrime2(inputNumber) {
    let result = true;

    if (inputNumber === 2) {
        result = true;
    }
    else if (inputNumber % 2 === 0) {
        result = false;
    }

    for (let i = 3; i < inputNumber; i = i + 2) {
        console.log(inputNumber, '%', i, '=', inputNumber % i);
        if (inputNumber % i === 0) {
            result = false;
            break;
        }
    }
    return result;
}

console.log('isPrime2()')
console.log('5', isPrime2(5));
console.log('97', isPrime2(97))
console.log('2', isPrime2(2));
console.log('2', isPrime2(4));
console.log('2', isPrime2(20));