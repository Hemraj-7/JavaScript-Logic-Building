function calculateCelsiusToFahrenheit(tempInCelsius) {
    // console.log(tempInCelsius);

    if (typeof tempInCelsius !== 'number') {
        throw new Error('Enter only valid Number of celsius')
    }

    let Fahrenheit = ((tempInCelsius) * 9 / 5) + 32;

    Fahrenheit = Math.round(Fahrenheit);

    return Fahrenheit;
}

console.log('27 Fahrenheit is: ',calculateCelsiusToFahrenheit(27));
console.log('1 Fahrenheit is: ',calculateCelsiusToFahrenheit(1));
console.log('32.8 Fahrenheit is: ',calculateCelsiusToFahrenheit(32.8));
console.log('0.7 Fahrenheit is: ',calculateCelsiusToFahrenheit(0.7));
console.log('-11 Fahrenheit is: ',calculateCelsiusToFahrenheit(-11));

// throw an Error ->
// console.log(calculateCelsiusToFahrenheit('ava'));
// console.log(calculateCelsiusToFahrenheit(null));