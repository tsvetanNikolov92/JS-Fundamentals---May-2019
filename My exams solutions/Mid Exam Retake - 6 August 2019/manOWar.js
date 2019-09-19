function manOWar(input) {
    let splitedInput = input
        .shift()
        .split('>');
    let piratesShipStats = splitedInput.map(Number);
    let splitedWarInput = input
        .shift()
        .split('>');
    let warshipStats = splitedWarInput.map(Number);
    let maxHealthPerSection = Number(input.shift());
    

    function fire(index, damageValue) {
        if (index >= 0 && index <= warshipStats.length) {
            let isSectionBreak = warshipStats[index] -= damageValue;
            
            if (isSectionBreak <= 0) {
                warshipStats = [];
                console.log('You won! The enemy ship has sunken.');
            } else {
                warshipStats[index] = isSectionBreak;
            }
        }
    }

    function defend(startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex <= piratesShipStats.length && startIndex < endIndex) {
            if (endIndex > 0 && endIndex <= piratesShipStats.length && endIndex > startIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    piratesShipStats[i] -= damage;
                    
                    if (piratesShipStats[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        piratesShipStats = [];
                        break;
                    }
                }
            }
        }
    }

    function repair(index, health) {
        if (index >= 0 && index <= piratesShipStats.length) {
            piratesShipStats[index] += health;

            if (piratesShipStats[index] > maxHealthPerSection) {
                piratesShipStats[index] = maxHealthPerSection;
            }
        }
    }

    function status() {
        let sectionToRepairCount = 0;

        for (let i = 0; i < piratesShipStats.length; i++) {
            let valueToRepair = maxHealthPerSection * 0.20;
            let isNeedRepair = piratesShipStats[i];

            if (valueToRepair > isNeedRepair) {
                sectionToRepairCount++;
            }
        }
        
        if (sectionToRepairCount !== 0) {
            console.log(`${sectionToRepairCount} sections need repair.`);
        }
    }

    function sumShipsStats(warShips, pirateShips) {
        let warShipSum = 0;
        let piratsShipsSum = 0;
        for (let i = 0; i < warShips.length; i++) {
            warShipSum += warShips[i];
        }

        for (let i = 0; i < pirateShips.length; i++) {
            piratsShipsSum += pirateShips[i];
        }

        console.log(`Pirate ship status: ${piratsShipsSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }

    for (let line of input) {
        if (line === 'Retire') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        if (piratesShipStats.length <= 0) {
            break;
        }

        if (warshipStats.length <= 0) {
            break;
        }

        if (command === 'Fire') {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);

            fire(index, damage);
        } else if (command === 'Defend') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);

            defend(startIndex, endIndex, damage);
        } else if (command === 'Repair') {
            let currentIndex = Number(tokens[1]);
            let health = Number(tokens[2]);

            repair(currentIndex, health);
        } else if (command === 'Status') {
            status(piratesShipStats);
        }
    }

    if (piratesShipStats.length !== 0 && warshipStats.length !== 0) {
        sumShipsStats(warshipStats, piratesShipStats);
    }
}

manOWar(
[
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 4 0 11',
    'Repair 3 18',
    'Retire' 
]
)