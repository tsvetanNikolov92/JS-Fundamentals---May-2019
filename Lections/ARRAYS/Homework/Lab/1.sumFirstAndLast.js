function sumFirstAndLast(arrOfStr) {
    let firstNum = Number(arrOfStr[0]);
    let lastNum = Number(arrOfStr[arrOfStr.length -1]);
    let sum = 0;

    sum = firstNum + lastNum;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40'])