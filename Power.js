function powerOf(baseNum, exponentNum) {

    if(typeof baseNum !== 'number' || typeof exponentNum !== 'number'){
        throw new Error('Only Integers are allowed in base and exponent')
    }

    if(baseNum < 1 || exponentNum < 1 ){
        throw new Error('Only positive number enter');
    }

    // console.log(baseNum, exponentNum);
    let result = 1;
    for (let i = 1; i <= exponentNum; i++) {
        // console.log(baseNum, exponentNum);
        result = result * baseNum;
    }
    return result;
}

console.log('powerOf(2, 3)', powerOf(2, 3));
console.log('powerOf(5, 4)', powerOf(5, 4));
console.log('powerOf(20, 3)', powerOf(20, 3));
// console.log('powerOf(20, 3)', powerOf('20', 3));
console.log('powerOf(20, 3)', powerOf(2, 2));