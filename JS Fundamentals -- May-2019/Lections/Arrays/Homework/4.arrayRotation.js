function arrayRotation(numArr, numOfRotation) {

    while (numOfRotation > 0) {
        
        let firstEl = numArr[0];

        for (let i = 0; i < numArr.length; i++) {
            numArr[i] = numArr[i + 1];            
        }

        numArr[numArr.length - 1] = firstEl;

        numOfRotation--;
    }

    console.log(numArr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)