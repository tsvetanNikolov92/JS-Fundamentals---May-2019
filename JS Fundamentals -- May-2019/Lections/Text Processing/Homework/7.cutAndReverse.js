function cutAndReverse(singleStr) {
    let halfCut = singleStr.length / 2;
    let firstHalf = singleStr.substr(0, halfCut);
    let secondHalf = singleStr.substr(halfCut);
    let reverseFirstHalf = firstHalf
        .split('')
        .reverse()
        .join('');
    let reverseSecondHalf = secondHalf
        .split('')
        .reverse()
        .join('');

    console.log(reverseFirstHalf);
    console.log(reverseSecondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')