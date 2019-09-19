function bitcoin(input) {
    let currentGram = 0;
    let sum = 0;
    let counter = 0;
    let dayOfFirstBitCoin = 0
    let allBitCoin = 0

    for (let i = 0; i < input.length; i++) {
       currentGram = input[i];
       sum += currentGram * 67.51;
       counter++;
       
       if (sum >= 11949.16) {
           dayOfFirstBitCoin = counter;
           allBitCoin++;
           sum -= 11949.16;
       }
    }
    console.log(`Bought bitcoins: ${allBitCoin}`);
    
    if (dayOfFirstBitCoin != 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitCoin}`);
    }

    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

bitcoin([3124.15, 504.212, 2511.124])