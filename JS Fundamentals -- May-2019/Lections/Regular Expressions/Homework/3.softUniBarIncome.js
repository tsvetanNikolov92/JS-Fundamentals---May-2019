function softUniBarIncome(input) {
    input.pop();
    let totalIncome = 0; 

    input
        .forEach((stringLine) => {
            let pattern = /%([A-Z][a-z]+)%<([\w]+)>\|([0-9]+)\|([0-9]+\.?[0-9]*)\$/gm;
            let result = pattern.exec(stringLine);
            
            let currentSum = Number(result[3]) * Number(result[4]);
            totalIncome += currentSum;

            console.log(`${result[1]}: ${result[2]} - ${currentSum.toFixed(2)}`);
        });
        
        console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(
[
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]
);