function equalSums(arrOfNum) {
    let indexOfEl = -1;
    
    for (let i = 0; i < arrOfNum.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arrOfNum[j];
        }

        for (let j = i + 1; j < arrOfNum.length; j++) {
            rightSum += arrOfNum[j];
        }

        if (rightSum === leftSum) {
            indexOfEl = i;
        }
    }
    
    if (indexOfEl !== -1) {
        console.log(indexOfEl);
    } else {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3])