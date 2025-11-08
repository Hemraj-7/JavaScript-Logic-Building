// let Str = "Software Development";

// console.log(Str)
// console.log(Str.length);

// let ReverseStr = "";
// for(let i = Str.length - 1; i >= 0; i--){
//     ReverseStr += Str[i]
// }
// console.log(ReverseStr)
// console.log(ReverseStr.length)


// -------------------------------------------------------
// Answer by Me using Fucntion.

function reverseString(Str) {
    let reverseStr = "";
    for (let i = Str.length - 1; i >= 0; i--) {
        reverseStr += Str[i];
    }
    return reverseStr;
}
console.log(reverseString("HEllo! Dear Hemsa"));


// -------------------------------------------------------
// Answer by sir ->

function reverseAString(inputString) {
    
    // console.log(typeof inputString)
    if (typeof inputString !== 'string') {
        throw new Error("Only Strings are allowed")
    }
    
    let result = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        // result = result + inputString[i];
        result += inputString[i];
    }
    return result;
}

console.log(reverseAString('HEllo!'));
console.log(reverseAString('12345'));
// console.log(reverseAString(12345));


// -------------------------------------------------------
// Other way Answer by sir ->

function reverseAString2(inputString){
    console.log(inputString);
    const splittedInput = inputString.split('');
    console.log(splittedInput);
    const reveredArray = splittedInput.reverse();
    console.log(reveredArray);
    const result = reveredArray.join('');
    console.log(result);
    return result;
}

console.log(reverseAString2("Hemsa"))
console.log(reverseAString2("Hemsa World"))