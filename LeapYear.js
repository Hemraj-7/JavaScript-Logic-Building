function isItLeafYearOrNot(input_num){
    if(typeof input_num !== 'number'){
        throw new Error('Enter Valid year.');
    }

    if(input_num <= 0){
        throw new Error('Enter a valid year.');
    }

    if(input_num % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isItLeafYearOrNot(2000));
console.log(isItLeafYearOrNot(2023));
console.log(isItLeafYearOrNot(2024));
// console.log(isItLeafYearOrNot(0));
// console.log(isItLeafYearOrNot(abx));
// console.log(isItLeafYearOrNot(-2024));


// -------------------------------------------------------------------------------------------------------

console.log("---------------------------------------------------------------------------")
function isLeafYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log("isLeafYear(2000)",isLeafYear(2000));
console.log("isLeafYear(2023)",isLeafYear(2023));
console.log("isLeafYear(2024)",isLeafYear(2024));
console.log("---------------------------------------------------------------------------")



function isLeafYear2(year){
    if(year % 4 === 0){
        return true;
    }
    return false;
}
console.log("isLeafYear2(2000)",isLeafYear2(2000));
console.log("isLeafYear2(2023)",isLeafYear2(2023));
console.log("isLeafYear2(2024)",isLeafYear2(2024));
console.log("---------------------------------------------------------------------------")



function isLeafYear3(year){
    return year % 4 === 0 ? true : false
}
console.log("isLeafYear3(2000)",isLeafYear3(2000));
console.log("isLeafYear3(2023)",isLeafYear3(2023));
console.log("isLeafYear3(2024)",isLeafYear3(2024));
console.log("---------------------------------------------------------------------------")


function isLeafYear4(year){
    return year % 4 === 0;
}
console.log("isLeafYear4(2000)",isLeafYear4(2000));
console.log("isLeafYear4(2023)",isLeafYear4(2023));
console.log("isLeafYear4(2024)",isLeafYear4(2024));
console.log("---------------------------------------------------------------------------")