function isArmstrongNumber(inputNumber) {
    console.log(inputNumber);
    let temp = inputNumber;
    let sum = 0;

    let length = String(inputNumber).length
    while (temp > 0) {
        let lastDigit = temp % 10;
        console.log('last digit', lastDigit)
        sum += lastDigit ** length;
        temp = Math.floor(temp / 10);
        console.log('newNmber', temp)
    }

    console.log(sum)

    if (sum === inputNumber) {
        return true;
    }
    return false;
}

console.log('isArmstrongNumber(153)', isArmstrongNumber(153));
console.log('isArmstrongNumber(371)', isArmstrongNumber(371));
console.log('isArmstrongNumber(3711)', isArmstrongNumber(3711));


// --------------------------------------------------------------------------

function isArmstrongNumber2(inputNumber) {
    console.log(inputNumber);

    let number = inputNumber;

    const digits = [];

    while (number > 0) {
        let lastdigit = number % 10;
        console.log('Last digit is : ', lastdigit);
        number = Math.floor(number / 10);
        console.log("new number is : ", number)
        digits.push(lastdigit);
    }

    console.log(digits)

    const length = digits.length;
    console.log('lenth is : ', length)

    let sum = 0;

    digits.forEach(d => {
        console.log(d, length, Math.pow(d, length));
        sum += Math.pow(d, length);
    })
    console.log("the sum is: ", sum)

    // if(sum === inputNumber){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return sum === inputNumber;


}

console.log('isArmstrongNumber2(153)', isArmstrongNumber2(153));
console.log('isArmstrongNumber2(371)', isArmstrongNumber2(371));
console.log('isArmstrongNumber2(3711)', isArmstrongNumber2(3711));
console.log('isArmstrongNumber2(92727)', isArmstrongNumber2(92727));
