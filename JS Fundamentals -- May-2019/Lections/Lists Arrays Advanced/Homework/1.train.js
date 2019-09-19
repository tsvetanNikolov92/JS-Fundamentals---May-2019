function train(input) {
    let wagons = input.shift()
        .split(' ')
        .map(Number);

    let maxCapacity = +input.shift();
    
    for (let line of input) {
        let currentEl = line.split(' ');

        if (currentEl.length === 2) {
            let wagonPassengers = Number(currentEl[1]);
            wagons.push(wagonPassengers);
        } else {
            let passengersCount = Number(currentEl[0]);

            for (let i = 0; i < wagons.length; i++) {
                let currentCapacity = wagons[i];

                if (passengersCount + currentCapacity <= maxCapacity) {
                    wagons[i] += passengersCount;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
    ]
)