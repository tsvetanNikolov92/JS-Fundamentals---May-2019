function mergeArrays(firstArr, secondArr) {
    let newArr = [];
    let length = firstArr.length;

    for (let i = 0; i < length; i++) {
        let firstCurrEl = firstArr[i];
        let secondCurrEl = secondArr[i];

        if (i % 2 === 0) {
            newArr.push(Number(firstCurrEl) + Number(secondCurrEl));
        } else {
            newArr.push(firstCurrEl + secondCurrEl);
        }
    }
    
    let output = '';
    for (let index in newArr) {
        let i = Number(index);
        let num = newArr[i];
        
        if (i !== newArr.length - 1) {
            output += num + ' - ';
        } else {
            output += num;
        }
    }
    console.log(output);
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])