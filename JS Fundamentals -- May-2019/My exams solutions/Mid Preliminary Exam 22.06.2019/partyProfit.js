function partyProfit(input) {
    let companionSize = Number(input.shift());
    let adventureDays = Number(input.shift());
    let earnedCoins = 0;
    let is

    for (let i = 1; i <= adventureDays; i++) {
        let currentDay = i;

        if (currentDay % 10 === 0) {
            companionSize -= 2;
        }
        
        if (currentDay % 15 === 0) {
            companionSize += 5
        }
        
        earnedCoins += 50;
        earnedCoins -= companionSize * 2;

        if (currentDay % 3 === 0) {
            earnedCoins -= companionSize * 3;
        }

        if (currentDay % 5 === 0) {
            earnedCoins += companionSize * 20;

            if (currentDay % 3 === 0) {
                earnedCoins -= companionSize * 2;
            }
        }
    }

    let coinsPerCompanion = Math.floor(earnedCoins / companionSize);
    console.log(`${companionSize} companions received ${coinsPerCompanion} coins each.`);
}

partyProfit([ '15', '30' ])