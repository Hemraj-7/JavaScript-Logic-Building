function swapTwoNumbers(a, b) {
    console.log('The value of a is:', a, 'The value of b is:', b);

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('the enter only numbers.')
    }

    // Using Third Variable ->
    // let c = a;
    // a = b;
    // b = c;
    // console.log(`After Swaping the value of a is: ${a} And the value of b is: ${b}`);


    // Without using third varible ->
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`After Swaping the value of a is: ${a} And the value of b is: ${b}`);


}

swapTwoNumbers(5, 6);
swapTwoNumbers(-5, -6);
// swapTwoNumbers(0, 0);