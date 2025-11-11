function countVowelsAndConsonets(inputString) {

    if (typeof inputString !== 'string') {
        throw new Error('Only String is allowed');
    }

    inputString = inputString.toLowerCase();

    let vowels = 'aeiou';
    let consonant = 'bcdfghjklmnpqrstvwxyz';

    let vowelCounts = 0;
    let consonantCounts = 0;

    for (let i = 0; i <= inputString.length - 1; i++) {
        // console.log(inputString[i])
        for (let j = 0; j <= vowels.length - 1; j++) {
            if (inputString[i] === vowels[j]) {
                vowelCounts++;
            }
        }
        for (let k = 0; k <= consonant.length - 1; k++) {
            if (inputString[i] === consonant[k]) {
                consonantCounts++;
            }
        }
    }
    // console.log(vowelCounts, consonantCounts)
    return { vowelCounts, consonantCounts };
}
console.log('countVowelsAndConsonets("Hello! World7")', countVowelsAndConsonets('Hello! World7'));
// console.log('countVowelsAndConsonets(4254)',countVowelsAndConsonets(4254)); // throw an Error
console.log(countVowelsAndConsonets('Hello! My Dear My name is Hemraj. and what is your name?'));



// -------------------------------------------------------------------------------------------------------------------------------------
// Solution by the Sir ->

function countVowelsAndConsonets2(inputString) {

    if (typeof inputString !== 'string') {
        throw new Error('Only String is allowed');
    }
    
    // console.log(inputString);

    inputString = inputString.toLowerCase();    // Convert string to lowercase
    // inputString = inputString.replace(' ','');  // replace first space to empty
    // inputString = inputString.replaceAll(' ','');   // Replace all the spaces to empty
    inputString = inputString.replace(/ /g, '');  // Replace all the spaces to empty -> / /g = this the regular expression

    console.log(inputString);

    let vowels = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxyz'

    let vowelCounts = 0;
    let consonantCounts = 0;

    for (let i = 0; i < inputString.length; i++) {
        // console.log(inputString[i])
        if (vowels.includes(inputString[i])) {
            vowelCounts++;
        }
        // else if(consonants.includes(inputString[i])){        // it is working...
        else if (/^[a-z]$/.test(inputString[i])) {       // thorugh regular Expression
            consonantCounts++;
        }
        else {
            console.log(`${inputString[i]} is nigther vowel nor consonant.`)
        }
    }
    // console.log(vowelCounts,consonantCounts)
    return { vowelCounts, consonantCounts }
}
console.log(countVowelsAndConsonets2("Hello World hem"));
console.log(countVowelsAndConsonets2("Hello! World   hem 123"));