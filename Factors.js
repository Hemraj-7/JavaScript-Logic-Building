function getFactors(inputNumber) {
    // console.log(inputNumber);

    if (typeof inputNumber !== 'number') {
        throw new Error('Enter only numbers')
    }

    if (inputNumber < 1) {
        throw new Error('Number must be greater than or equal to 1');
    }

    if (!Number.isInteger(inputNumber)) {
        throw new Error(`Expected an integer, but got ${inputNumber}`);
    }

    let factorNumbers = []
    // console.log(typeof factorialNumbers)

    for (let i = 1; i <= inputNumber; i++) {
        if (inputNumber % i === 0) {
            factorNumbers.push(i)
        }
    }
    // console.log(factorialNumbers)
    return factorNumbers;
}

console.log('getFactors(4)', getFactors(4));
console.log('getFactors(14)', getFactors(14));
console.log('getFactors(35)', getFactors(35));
console.log('getFactors(1110)', getFactors(1110));
console.log('getFactors(1500)', getFactors(1500));
console.log('getFactors(1500)', getFactors(100));
// console.log('getFactors(1)', getFactors("abc"));
// console.log('getFactors(1.7)', getFactors(1.7));
