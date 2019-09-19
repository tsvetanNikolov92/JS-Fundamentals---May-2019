function battleManager(input) {
    let peopleList = {};
    let peopleEnergyList = {};
    let peopleCount = [];

    for (let line of input) {
        if (line === 'Results') {
            break;
        }

        let tokens = line.split(':');
        let command = tokens[0];

        if (command === 'Add') {
            let name = tokens[1];
            let health = Number(tokens[2]);
            let energy = Number(tokens[3]);

            add(name, health, energy);
        } else if (command === 'Attack') {
            let name = tokens[1];
            let defName = tokens[2];
            let damage = tokens[3];

            attack(name, defName, damage)
        } else if (command === 'Delete') {
            let personName = tokens[1];

            deletePerson(personName);
        }
    }
    console.log(`People count: ${peopleCount.length}`);

    if (peopleCount.length > 1) {
        let sortedPeople = Object.entries(peopleList)
        .sort(healthSort);

        for (let line of Object.entries(sortedPeople)) {
            let currentLine = line[1];
            let name = currentLine[0];
            let health = currentLine[1];
            
            if (health !== undefined && peopleEnergyList[name] !== undefined) {
                console.log(`${name} - ${health} - ${peopleEnergyList[name]}`);
            } else {
                break;
            }
        }
    } else {
        let personInfo = Object.entries(peopleList);
        let infoLine = personInfo[0];
        console.log(`${infoLine[0]} - ${infoLine[1]} - ${peopleEnergyList[infoLine[0]]}`);
    }

    function add(personName, health, energy) {
        if (!peopleList.hasOwnProperty(personName)) {
            peopleList[personName] = health;
            peopleEnergyList[personName] = energy;
            peopleCount.push(personName);
        } else {
            peopleList[personName] += health;
        }
    }

    function attack(attackerName, defenderName, damage) {
        damage = Number(damage);
        
        if (peopleList.hasOwnProperty(attackerName) && peopleList.hasOwnProperty(defenderName)) {
            peopleList[defenderName] -= damage;
            peopleEnergyList[attackerName] -= 1;
        }

        if (peopleList[defenderName] <= 0) {
            delete peopleList[defenderName];
            let indexOfEl = peopleCount.indexOf(defenderName);
            
            if (indexOfEl !== -1) {
                let newCount = peopleCount.splice(indexOfEl, 1)
            }
            console.log(`${defenderName} was disqualified!`);
        }

        if (peopleEnergyList[attackerName] <= 0) {
            delete peopleEnergyList[attackerName];
            let indexOfEl = peopleCount.indexOf(attackerName);
            
            if (indexOfEl !== -1) {
                let newCount = peopleCount.splice(indexOfEl, 1)
            }
            console.log(`${attackerName} was disqualified!`);
        }
    }

    function deletePerson(personName) {
        if (personName === 'All') {
            peopleList = {};
            peopleEnergyList = {};
            peopleCount = [];
        }
    }

    function healthSort(a, b) {
        let aPersonHealth = a[1];
        let bPersonHealth = b[1];

        let result = bPersonHealth - aPersonHealth;

        if (result === 0) {
            let aPersonName = a[0];
            let bPersonName = b[0];

            return aPersonName.localeCompare(bPersonName);
        }

        return result;
    }
}

battleManager(
[ 
   'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results' 
]
)