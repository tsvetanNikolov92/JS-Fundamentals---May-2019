function dungeonestDark(input) {
    let splitArr = input[0].split('|');
    let initHealth = 100;
    let initCoin = 0;
    let bestRoom = 0;
    let initDiff = 0;

    for (let i = 0; i < splitArr.length; i++) {
        if (initHealth <= 0) {
            break;
        }
        let currentElOnRoom = splitArr[i].split(' ');
        
        
        for (let j = 0; j < 1; j++) {
            let currentEl = currentElOnRoom[j];
            let currentNum = Number(currentElOnRoom[j + 1]);
            

            if (currentEl === 'potion') {
                if (initHealth < 100) {
                    initDiff = initHealth;
                    initHealth += currentNum;
                    if (initHealth > 100) {
                        initDiff = 100 - initDiff;
                        initHealth = 100;
                    } else {
                        initDiff = 0;
                    }
                    
                    if (initDiff !== 0) {
                        console.log(`You healed for ${initDiff} hp.`);
                        console.log(`Current health: ${initHealth} hp.`);
                    } else {
                        console.log(`You healed for ${currentNum} hp.`);
                        console.log(`Current health: ${initHealth} hp.`); 
                    }
                }
            } else if (currentEl === 'chest') {
                initCoin += currentNum;
                console.log(`You found ${currentNum} coins.`);
            } else {
                initHealth -= currentNum;

                if (initHealth <= 0) {
                    console.log(`You died! Killed by ${currentEl}.`);
                    console.log(`Best room: ${i + 1}`)
                    break;
                } else {
                    console.log(`You slayed ${currentEl}.`);
                }
            }

        }
        bestRoom++;
    }
    if (bestRoom === splitArr.length) {
        console.log(`You've made it!`);
        console.log(`Coins: ${initCoin}`);
        console.log(`Health: ${initHealth}`);
    }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])