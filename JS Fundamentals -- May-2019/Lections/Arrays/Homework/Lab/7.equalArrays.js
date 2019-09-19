function equalArrays(arr1, arr2) {
    let currentArr1 = 0;
    let currentArr2 = 0;
    let difIndex = null;
    let equalSum = 0;
    let equalArr = true;

    for (let i = 0; i < arr1.length; i++) {
        currentArr1 = Number(arr1[i]); 
        currentArr2 = Number(arr2[i]);

        if (currentArr1 !== currentArr2) {
            difIndex = i;
            equalArr = false;
            break;
        } else {
            equalSum += currentArr1;
        }   
    }
    
    if (equalArr) {
        console.log(`Arrays are identical. Sum: ${equalSum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${difIndex} index`);
    }

}

equalArrays(['10','20','30'], ['10','20','30'])