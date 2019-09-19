function vacation (groupNum, groupType, weekDay) {
    let sum = 0
    let totalSum = 0

    if (groupType === `Students`) {
            if (weekDay === `Friday`) {
                sum = 8.45;
            } else if (weekDay === `Saturday`) {
                sum = 9.80;
            } else {
                sum = 10.46;
            }
        }   
        if (groupType === `Business`) {
            if (groupNum >= 100) {
                groupNum -= 10;
            }
                if (weekDay === `Friday`) {
                    sum = 10.90;
                } else if (weekDay === `Saturday`) {
                    sum = 15.60;
                } else {
                    sum = 16;
                }
            }
        if (groupType === `Regular`) {
                if (weekDay === `Friday`) {
                    sum = 15;
                } else if (weekDay === `Saturday`) {
                    sum = 20;
                } else {
                    sum = 22.50;
                }
            }
    
    totalSum = groupNum * sum;
   
    if (groupType === `Students`) {
        if (groupNum >= 30) {
            totalSum *= 0.85;
        }
    } else if (groupType === `Regular`) {
        if (groupNum >= 10 && groupNum <= 20) {
            totalSum *= 0.95
        }
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`)
}

vacation(30,
    "Students",
    "Sunday"
    )