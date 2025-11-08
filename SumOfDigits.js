function calculateSumOfDigits(num) {
    let temp = 0;
    // console.log(temp)
    temp = num % 10;
    // console.log(temp)
    temp += Math.floor(num % 100 / 10)
    // console.log(temp);
    temp += Math.floor(num / 100)
    console.log("The sum of 3 digits is : ", temp);

}

calculateSumOfDigits(123)
calculateSumOfDigits(999)
calculateSumOfDigits(121)
calculateSumOfDigits(12)
calculateSumOfDigits(72)


console.log('------------------------------------------------------------------------------------');
console.log('Answers followed by Yt video');
console.log('Through String');


function calculateSumOfDigits2(inputNumber) {
    let inputNumberAsString = inputNumber.toString();
    console.log(inputNumber, inputNumberAsString);
    let splittedInputString = inputNumberAsString.split('')
    console.log(splittedInputString);
    let SumOfDigits = 0;
    splittedInputString.forEach(num => {
        console.log(num, parseInt(num));
        SumOfDigits += parseInt(num)
    })
    return SumOfDigits;
}
console.log("calculateSumOfDigits2(123)", calculateSumOfDigits2(123))
console.log("calculateSumOfDigits2(12356789)", calculateSumOfDigits2(123456789))


console.log('------------------------------------------------------------------------------------');
console.log('Answers followed by Yt video');
console.log('Without Converting String');
console.log('CalculateSumOfDigits3');
console.log('------------------------------------------------------------------------------------');

function calculateSumOfDigits3(inputNumber){
    console.log(inputNumber);
    console.log('Last digit of the number',inputNumber % 10);
    console.log('divide by 10', Math.floor(inputNumber/10));

    let number = inputNumber;
    let SumOfDigits = 0;
    while(number > 0){
        let lastDigit = number % 10;
        number = Math.floor(number / 10);
        console.log("Last Digit: ", lastDigit, " New Number", number);
        SumOfDigits += lastDigit;
    }
    return SumOfDigits;
}

console.log('calculateSumOfDigits3(123)',calculateSumOfDigits3(123))
console.log('calculateSumOfDigits3(123456789)',calculateSumOfDigits3(123456789))