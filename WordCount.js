function wordCounts(sentence) {
    console.log(sentence);
    let splittedSentence = sentence.split(' ');
    console.log(splittedSentence)
    let words = splittedSentence.length;
    return words;
}

console.log(wordCounts('Hello! Dear, My name is Hemraj'));
console.log(wordCounts('Hello! Dear, My name is        Hemraj')); // it's creating a problem


// -------------------------------------------------------------------------------------------------------
// Solution by watching video ->

function wordCounts2(sentence) {

    if(typeof sentence !== 'string'){
        throw new Error('Only String or sentence are allowed')
    }

    console.log('beforeTrim', sentence);
    sentence = sentence.trim();
    console.log('afterTrim', sentence)

    let splittedSentence = sentence.split(' ');
    console.log(splittedSentence);

    let nonEmptyElements = splittedSentence.filter((element) => element != '');
    console.log('non Empty elements ', nonEmptyElements)

    return nonEmptyElements.length;
}

console.log('Hello! Dear, My name is        Hemraj',wordCounts2('Hello! Dear, My name is        Hemraj'));
console.log('     Hello! Dear, My name is        Hemraj   ',wordCounts2('     Hello! Dear, My name is        Hemraj   '));
// console.log(wordCounts2(343543)) // thorw an error.