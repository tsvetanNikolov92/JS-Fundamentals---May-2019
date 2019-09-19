function cookingFactory(input) {
    let batchList = {};
    let splitedInput = input

    const valueSumator = (valueList) => {
        let totalValue = 0;

        for (let currentNum of valueList) {
            totalValue += currentNum;
        }

        return totalValue;
    }

    const sortBatchQuality = (a, b) => {
        let aBatchValue = a[1];
        let bBatchValue = b[1];
        let result = bBatchValue - aBatchValue;

        if (result === 0) {
            let aNumLength = a[0].split('#').length;
            let bNumLength = b[0].split('#').length;
            let aAverage = aBatchValue / aNumLength;
            let bAverage = bBatchValue / bNumLength;
            let averageResult = bAverage - aAverage;
            
            if (averageResult === 0) {
                let batchElLength = aNumLength - bNumLength;

                return batchElLength;
            }

            return averageResult;
        }

        return result;
    }
   
    for (let batchLine of splitedInput) {
        if (batchLine === 'Bake It!') {
            break;
        }

        if (!batchList.hasOwnProperty(batchLine)) {
            let batchValueList = batchLine
                .split('#')
                .map(Number);
            let batchValue = valueSumator(batchValueList);
            batchList[batchLine] = batchValue;
        }
    }

    let sortedQualityList = Object
        .entries(batchList)
        .sort(sortBatchQuality)
    
    let bestBatchName = sortedQualityList[0]
        bestBatchName = bestBatchName[0]

    console.log(`Best Batch quality: ${batchList[bestBatchName]}`);

    let bestName = bestBatchName
        .split('#')
        .join(' ');

    console.log(`${bestName}`);
}

cookingFactory(
[ 
    '5#3#2',
    '10#2#-2#1#-1',
    '4#2#1',
    'Bake It!'
]
);