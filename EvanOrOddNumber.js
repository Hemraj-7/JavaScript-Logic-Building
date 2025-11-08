function evenOrOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is Even Number.`);
        return (`${num} is Even Number.`);
    }
    else{
        console.log(`${num} is Odd Number.`);
        return (`${num} is Odd Number.`);
    }
}

evenOrOdd(2)
evenOrOdd(3)
evenOrOdd(28)
evenOrOdd(-1288)
evenOrOdd(87)
evenOrOdd(89977)
evenOrOdd(1.2)
evenOrOdd(0)
console.log(evenOrOdd(0))