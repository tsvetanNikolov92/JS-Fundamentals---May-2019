function houseParty(input) {
    let list = [];

    for (let line of input) {
        let currentEl = line.split(' ');
        let name = currentEl[0];

        if (currentEl.length === 3) {
            let isIncluded = list.includes(name)
            
            if (isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            let indexOfPerson = list.indexOf(name);

            if (indexOfPerson !== -1) {
                list.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])