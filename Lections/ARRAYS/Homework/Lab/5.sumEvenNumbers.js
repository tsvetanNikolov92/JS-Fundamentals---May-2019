function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let currentNum = Number(input[i]);

        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])