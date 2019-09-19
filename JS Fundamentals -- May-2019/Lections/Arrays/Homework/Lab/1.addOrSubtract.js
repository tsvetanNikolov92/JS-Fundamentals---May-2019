function addOrSubtract(arrOfNum) {
    let currentNum = 0;
    let output = [];
    let sumOrigArray = 0;
    let sumModifArray = 0;

    for (let i = 0; i < arrOfNum.length; i++) {
        currentNum = arrOfNum[i];
        
        if (currentNum % 2 === 0) {
            output += currentNum + i + ', ';    
        } else {
            output += currentNum - i + ', ';
        }
    }
    console.log(output)
}

addOrSubtract([5, 15, 23, 56, 35])