function calculator(number, operator, anotherNum) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number + anotherNum;
            break;
        case '-':
            result = number - anotherNum;
            break;
        case '*':
            result = number * anotherNum;
            break;
        case '/':
            result = number / anotherNum;
            break;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10)