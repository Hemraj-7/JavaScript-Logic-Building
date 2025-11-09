function MultiplicationTable(tableOf, tableTill) {
    if (typeof tableOf !== 'number') {
        throw new Error("tableOf number must be positive")
    }
    if (typeof tableTill !== 'number') {
        throw new Error("tableTill number must be positive")
    }

    if (tableOf < 1 || tableTill < 1) {
        throw new Error("tableOf and tableTill should be greater than the zero")
    }
    // console.log(tableOf, tableTill);
    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} =`, tableOf * i);
    }
}


MultiplicationTable(2, 20);
console.log('------------------------------------------');
MultiplicationTable(8, 20);
console.log('------------------------------------------');
MultiplicationTable(101, 15);
console.log('------------------------------------------');
MultiplicationTable(1213, 78);


// --------------------------------------------------------------------------------------------------
function printMultiplicationTable(tableOf, tableTill) {
    for (let i = tableOf; i <= tableOf * tableTill; i += tableOf) {
        console.log(i);
    }
}
printMultiplicationTable(4, 10)