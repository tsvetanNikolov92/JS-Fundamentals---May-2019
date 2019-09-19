function condenseArrayToNumber(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let totalSum = 0;
    let lastNum = Number(nums.length - 1);
    let singleNum = false;

    for (let i = 0; i <= Math.floor(nums.length / 2); i++) {
        if (nums.length === 1) {
            singleNum = true;
            break;
        }
        leftSum += nums[i];
    }

    for (let y = lastNum; y >= Math.floor(nums.length / 2); y--) {
        if (nums.length === 1) {
            break;
        }
        rightSum += nums[y];
    }
   
    if (singleNum) {
        console.log(`${nums}`);
    } else {
        totalSum = leftSum + rightSum;
        console.log(totalSum);
    }
}

condenseArrayToNumber([1])