function treasureHunt(input) {
    let initialLoot = input
        .shift()
        .split('|');

    let averageValue = 0;
    
    const loot = (itemsArr) => {
        
        for (let line of itemsArr) {
            let isInclude = initialLoot.includes(line);

            if (!isInclude) {
                initialLoot.unshift(line);
            }
        }  
    }

    const drop = (index) => {
        index = Number(index);
        if (index >= 0 && index <= initialLoot.length) {
            let replaceItem = initialLoot.splice(index, 1);
            initialLoot.push(replaceItem[0]);
        }
    }

    const steal = (count) => {
        count = Number(count);
        let stolenItems = [];

        if (count >= 0 && count <= initialLoot.length) {
            let startIndex = initialLoot.length - count;
            stolenItems = initialLoot.splice(startIndex, count);
        } else {
            stolenItems = initialLoot.splice(0, initialLoot.length)
        }
        
        console.log(`${stolenItems.join(', ')}`);
    }

    const averageSumator = (treasureItems) => {
        if (treasureItems) {
            for (let currentItem of treasureItems) {
                averageValue += currentItem.length;
            }

            averageValue /= treasureItems.length;
        }
    }

    let commandParser = {
        'Loot': loot,
        'Drop': drop,
        'Steal': steal
    }

    for (let line of input) {
        if (line === 'Yohoho!') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        commandParser[command]([...tokens]);
    }

    averageSumator(initialLoot);

    if (averageValue) {
        console.log(`Average treasure gain: ${averageValue.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(
[ 
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!' 
]
)