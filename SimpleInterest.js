function calculateSimpleInterest(principalAmount, interestRateYearly, timeDurationInYear) {

    console.log(principalAmount, interestRateYearly, timeDurationInYear)

    if (typeof principalAmount !== 'number' || typeof interestRateYearly !== 'number' || typeof timeDurationInYear !== 'number') {
        throw new Error('Only Numbers are allowed in the Principal Amount, Interest Rate and Time Duration')
    }

    if (Number.isNaN(principalAmount) || Number.isNaN(interestRateYearly) || Number.isNaN(timeDurationInYear)) {
        throw new Error('Please assign number NaN are not allowed')
    }

    if (principalAmount < 500 || interestRateYearly < 1 || timeDurationInYear < 1) {
        throw new Error('Principle amout must be greater than or equal to 500. IntrestRate must be greater than or equal to 1. and Time duration must be greater than or equal to 1 year');
    }

    let simpleIntrest = (principalAmount * interestRateYearly * timeDurationInYear) / 100;
    simpleIntrest = simpleIntrest.toFixed(2)
    return simpleIntrest;
}

console.log(calculateSimpleInterest(1000, 5, 1))
console.log(calculateSimpleInterest(20000, 10, 5))
console.log(calculateSimpleInterest(200000, 24, 2))
console.log(calculateSimpleInterest(72000, 12.88, 3))
// console.log(calculateSimpleInterest(NaN, 5, 1))
// console.log(calculateSimpleInterest(10, 5, 1))
// console.log(calculateSimpleInterest('1000', 10, 1))
// console.log(calculateSimpleInterest(1000, 'a', 1))
// console.log(calculateSimpleInterest(1000, 10, 'a'))