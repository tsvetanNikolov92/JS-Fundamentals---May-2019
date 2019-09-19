function addOrSubtract(origArray) {
    let modArray = [];
    let currentNum = 0;
    let origArraySum = 0;
    let modArraySum = 0;

    for (let i = 0; i < origArray.length; i++) {
        currentNum = origArray[i];
        currentNum = Number(currentNum);
        origArraySum += Number(currentNum);

        if (currentNum % 2 === 0) {
            modArray.push(currentNum + i);
        } else {
            modArray.push(currentNum - i);
        }
    }
    for (const num of modArray) {
        modArraySum += num;
    }
    console.log(modArray);
    console.log(origArraySum);
    console.log(modArraySum);
}

addOrSubtract([5, 15, 23, 56, 35])