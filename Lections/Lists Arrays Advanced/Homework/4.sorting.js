function sortingNum(arrOfNum) {
    let biggestNum = [];
    let smallestNum = [];
    let output = '';
    let copyArrOfNum = arrOfNum.slice();

    let sortedNumsAsc = copyArrOfNum
        .sort((a, b) => a - b);

    for (let i = 0; i < arrOfNum.length / 2; i++) {
        let currentBiggestNum = sortedNumsAsc.pop();
        let currentSmallestNum = sortedNumsAsc.shift();

        biggestNum.push(currentBiggestNum);
        smallestNum.push(currentSmallestNum);
    }

    for (let j = 0; j < arrOfNum.length / 2; j++) {
        let finalOutputBig = biggestNum.shift();
        let finalOutputSmall = smallestNum.shift();
        
        output += finalOutputBig + ' ';
        output += finalOutputSmall + ' ';
        output.trim()
    }

    console.log(output);
}

sortingNum([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])