function factorialDivision(firstInt, secondInt) {
    let sumFirstInt = 1;
    let sumSecondInt = 1;
    let output = 0;

    for (let i = 1; i <= secondInt; i++) {
        sumSecondInt *= i;
    }

    output = firstFactorial(firstInt) / sumSecondInt;
    console.log(output.toFixed(2));
    
    function firstFactorial() {
        
        for (let i = 1; i <= firstInt; i++) {
            sumFirstInt *= i;
        }
        
        return sumFirstInt;
    }
}

factorialDivision(5, 2)