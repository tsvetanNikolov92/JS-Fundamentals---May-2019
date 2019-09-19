function searchForNumber(firstArr, secondArr) {
    [numOfEl, deleteCount, searchNum] = secondArr;
    let occursCount = 0;

    let modArr = firstArr.splice(0, numOfEl);
        modArr.splice(0, deleteCount);

    for (let i = 0; i < modArr.length; i++) {
        let currentNum = modArr[i];

        if (currentNum === searchNum) {
            occursCount++;
        }
    }

    console.log(`Number ${searchNum} occurs ${occursCount} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )