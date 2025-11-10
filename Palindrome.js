function isPalindrome(inputString) {

    if (typeof inputString !== 'string') {
        throw new Error("Only String Input allowed")
    }

    // console.log(inputString);
    let splittedInputString = inputString.split('')
    // console.log(splittedInputString);
    let reverseString = splittedInputString.reverse();
    // console.log(reverseString);
    let reverseInputString = reverseString.join('');
    // console.log(reverseInputString);
    if (inputString === reverseInputString) {
        return true;
    }
    return false;
}

console.log('isPalindrome("Hello!")', isPalindrome("Hello!"))
console.log('isPalindrome("madam")', isPalindrome("madam"))
console.log('isPalindrome("Madam")', isPalindrome("Madam"))
console.log('isPalindrome("123")', isPalindrome('123'))
console.log('isPalindrome("121")', isPalindrome('121'))



function isPalindrome2(inputString) {
    // console.log(inputString, inputString.length);
    let reverseString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        // console.log(inputString[i])
        reverseString += inputString[i];
    }
    // console.log(reverseString);
    if (inputString === reverseString) {
        return true;
    }
    return false;

}
console.log(isPalindrome2("xyz"));
console.log(isPalindrome2("xyx"));


// ------------------------------------------------------------------------------------------------------------------------
// by sir ->
//  through comparision first to last, second to second last, thrid to third last so on...
//  it goes to the string half.

function isPalindrome3(inputString) {
    // console.log(inputString);
    // for (let i = 0; i <= inputString.length - 1; i++) {
    for (let i = 0; i <= inputString.length / 2; i++) {
        // console.log(" i is ", i);
        // console.log('inputString.length - 1 - i is ',inputString.length - 1 - i);
        // console.log(inputString[i], inputString[inputString.length - 1 - i]);
        if (inputString[i] !== inputString[inputString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome3("hemsa"));
console.log(isPalindrome3("madam"));
console.log(isPalindrome3("maddam"));
console.log(isPalindrome3("madgdam"));

// another way ->
function isPalindrome4(inputString) {
    inputString = inputString.toLowerCase();
    let start = 0;
    let end = inputString.length - 1;
    for (start, end; start < end; start++, end--) {
        // console.log(start, end);
        // console.log(inputString[start], inputString[end]);
        if (inputString[start] !== inputString[end]) {
            return false;
        }
    }
    return true;
}
console.log('Hemsa', isPalindrome4("Hemsa"));
console.log('madam', isPalindrome4("madam"));
console.log('level', isPalindrome4("level"));
console.log('abba', isPalindrome4("abba"));
console.log('Abba', isPalindrome4("Abba"));