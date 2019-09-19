function blackFlag(input) {
    let piratingLastsDays = Number(input.shift());
    let plunderPerDay = Number(input.shift());
    let expectedEndPlunder = Number(input.shift());
    let totalGain = 0;
    for (let i = 1; i <= piratingLastsDays; i++) {
        totalGain += plunderPerDay;

        if (i % 3 === 0) {
            totalGain += plunderPerDay * 0.50;
        }

        if (i % 5 === 0) {
            totalGain *= 0.70;
        }
    }

    if (totalGain >= expectedEndPlunder) {
        console.log(`Ahoy! ${totalGain.toFixed(2)} plunder gained.`);
    } else {
        let percent = totalGain / expectedEndPlunder * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}

blackFlag([ '5', '40', '100' ]);