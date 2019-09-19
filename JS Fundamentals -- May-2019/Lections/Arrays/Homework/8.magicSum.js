function magicSum(arrOfIntegers, givenNum) {
    let sumIntegers = 0;
    
    for (let i = 0; i < arrOfIntegers.length; i++) {
        let currentEl = arrOfIntegers[i];
        
        for (let j = i + 1; j < arrOfIntegers.length; j++) {
            let nextEl = arrOfIntegers[j];
            sumIntegers = currentEl + nextEl;

            if (sumIntegers === givenNum) {
                console.log(`${currentEl} ${nextEl}`);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27)