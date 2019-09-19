function springVacationTrip(input) {
    let tripDays = Number(input.shift());
    let budged = Number(input.shift());
    let groupSize = Number(input.shift());
    let fuelPrice = Number(input.shift());
    let foodPrice = Number(input.shift());
    let roomPrice = Number(input.shift());
    let foodExpenses = foodPrice * groupSize * tripDays;
    let hotelExpenses = roomPrice * groupSize * tripDays;
    
    if (groupSize > 10) {
        hotelExpenses *= 0.75;
    }

    let totalExpenses = foodExpenses + hotelExpenses;

    for (let i = 1; i <= input.length; i++) {
        let currentDistance = Number(input[i - 1]);

        totalExpenses += currentDistance * fuelPrice;

        if (i % 3 === 0) {
            let additExpensed = totalExpenses * 0.40;
            totalExpenses += additExpensed;
        }

        if (i % 5 === 0) {
            let additExpensed = totalExpenses * 0.40;
            totalExpenses += additExpensed;
        }

        if (i % 7 === 0) {
            let money = totalExpenses / groupSize;
            totalExpenses -= money;
        }

        if (totalExpenses > budged) {
            let diff = totalExpenses - budged;
            console.log(`Not enough money to continue the trip. You need ${diff.toFixed(2)}$ more.`);
            break;
        }
    }

    if (totalExpenses <= budged) {
        let diff = budged - totalExpenses;
        console.log(`You have reached the destination. You have ${diff.toFixed(2)}$ budget left.`);
    }
}

springVacationTrip(
[
    '10',
    '20500',
    '11',
    '1.2',
    '8',
    '13',
    '100',
    '150',
    '500',
    '400',
    '600',
    '130',
    '300',
    '350',
    '200',
    '300'
]
)