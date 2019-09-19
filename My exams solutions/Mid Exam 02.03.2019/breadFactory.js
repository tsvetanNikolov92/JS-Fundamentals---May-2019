function breadFactory(input) {
    let dayCompleteCount = 0;
    let initialEnergy = 100;
    let initialCoins = 100;
    let splitedInput = input
        .shift()
        .split('|');


    for (let eventLine of splitedInput) {
        let tokens = eventLine
            .split('-');

        let command = tokens[0];

        if (command === 'rest') {
            let energy = Number(tokens[1]);

            rest(energy);
        } else if (command === 'order') {
            let coinsValue = Number(tokens[1]);

            order(coinsValue);
        } else {
            let ingredName = tokens[0];
            let ingredPrice = Number(tokens[1]);

            let isHaveMoney = initialCoins - ingredPrice;

            if (isHaveMoney >= 0) {
                console.log(`You bought ${ingredName}.`);
                initialCoins = isHaveMoney;
            } else {
                console.log(`Closed! Cannot afford ${ingredName}.`);
                break;
            }
        }
        
        if (initialCoins < 0 || initialEnergy < 0) {
            break;
        }
        dayCompleteCount++;
    }

    if (dayCompleteCount === splitedInput.length) {
        console.log(`Day completed!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Energy: ${initialEnergy}`);
    }

    
    function rest(energyToGain) {
        let isExceed = initialEnergy + energyToGain;

        if (isExceed > 100) {
            let gainedEnergy = 100 - initialEnergy;
            console.log(`You gained ${gainedEnergy} energy.`);
            initialEnergy = 100;
        } else {
            initialEnergy = isExceed;
            console.log(`You gained ${energyToGain} energy.`);
        }

        console.log(`Current energy: ${initialEnergy}.`);
    }

    function order(coinsToEarn) {
        let isHaveEnergy = initialEnergy - 30;

        if (isHaveEnergy < 0) {
            initialEnergy += 50;
            console.log(`You had to rest!`);
        } else {
            console.log(`You earned ${coinsToEarn} coins.`);
            initialCoins += coinsToEarn;
            initialEnergy = isHaveEnergy;
        }
    }
}

breadFactory(['rest-2|order-10|eggs-100|rest-10 ']);