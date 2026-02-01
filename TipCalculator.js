function tipCalculator(Amount) {
  const tipPercentages = [5, 10, 15, 20];
  console.log("Total amount is : ", Amount);

  const tipAmounts = [];

  for (let i = 0; i < tipPercentages.length; i++) {
    tipAmounts.push(Math.floor((Amount / 100) * tipPercentages[i]));
  }
  console.log("Tips amount are in percentages 5%, 10%, 15% and 20%");
  //   console.log(tipAmounts);
  return tipAmounts;
}

console.log(tipCalculator(387));
console.log(tipCalculator(999));
console.log(tipCalculator(99827));

console.log(
  "-----------------------------------------------------------------------------------------------------",
);
// ---------------------------------------------------------------------------------------------------------------
// Answer by yt video!

function calulateTipAmount(baseAmount, tipPercentages, locale, currency) {
  console.log(baseAmount, tipPercentages);
  let result = [];

  for (let i = 0; i < tipPercentages.length; i++) {
    console.log(tipPercentages[i]);
    let tipAmount = baseAmount * (tipPercentages[i] * 0.01);
    // tipAmount = tipAmount.toFixed(2);
    // result.push(tipAmount)

    // const formatter = Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    // });

    const formatter = Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });

    result.push(formatter.format(tipAmount));
  }

  return result;
}

// console.log(calulateTipAmount(1000, [5, 10, 15]));
// console.log(calulateTipAmount(997, [5, 10, 15]));
// console.log(calulateTipAmount(93821, [5, 10, 15]));
console.log(calulateTipAmount(997, [5, 10, 15], "en-IN", "INR"));
console.log(calulateTipAmount(93821, [5, 10, 15], "en-US", "USD"));
