function addNum(firstInt, secondInt, thirdInt) {
    let sum = (firstInt, secondInt) => firstInt + secondInt;
    let subtract = (result, thirdInt) => result - thirdInt;

    let result = sum(firstInt, secondInt);
    console.log(subtract(result, thirdInt));
}

addNum(23, 6, 10)