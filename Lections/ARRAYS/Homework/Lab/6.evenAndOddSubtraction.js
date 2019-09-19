function evenAndOddSubtraction(arr1, arr2) {
    let evenSum = 0;
    let oddSum = 0;
    let totalSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }

        totalSum = evenSum - oddSum;
    }

    console.log(totalSum);
}

evenAndOddSubtraction([1,2,3,4,5,6])