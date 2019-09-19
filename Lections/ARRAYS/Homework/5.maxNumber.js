function maxNumber(arrNum) {
    let lastTop = arrNum[arrNum.length - 1];
    let output = [];

    for (let i = 0; i < arrNum.length; i++) {
        let currNum = arrNum[i];
        let isTopInteger = true;
        
        for (let j = i + 1; j < arrNum.length; j++) {
            let nextEl = arrNum[j];
            
            if (currNum <= nextEl) {
            isTopInteger = false;
            break; 
            }
        }

        if (isTopInteger) {
           output.push(currNum); 
        }
    }
    console.log(output.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48])