function maxSeqOfEqNum(arrayOfNum) {
    let indexOfBiggestSeq = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < arrayOfNum.length; i++) {
        let currentEl = arrayOfNum[i];
        let currentSeqLength = 1;

        for (let j = i + 1; j < arrayOfNum.length; j++) {
            let nextEl = arrayOfNum[j];

            if (currentEl !== nextEl) {
                break;
            }

            currentSeqLength++;
        }
        if (currentSeqLength > maxSeqLength) {
            maxSeqLength = currentSeqLength;
            indexOfBiggestSeq = i;
        }
    }
    let element = arrayOfNum[indexOfBiggestSeq];

    console.log(`${element} `.repeat(maxSeqLength));
}

maxSeqOfEqNum([4, 4, 4, 4])