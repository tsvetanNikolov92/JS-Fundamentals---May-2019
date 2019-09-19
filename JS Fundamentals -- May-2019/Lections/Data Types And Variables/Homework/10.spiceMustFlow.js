function spiceMustFlow(startingYield) {
    let dayCount = 0;
    let daySum = 0;

    while (startingYield >= 100) {
        dayCount++;
        daySum += startingYield;
        daySum -= 26;
        startingYield -= 10;
    }
    
    if (daySum >= 26) {
        daySum -= 26;
    }
    console.log(dayCount);
    console.log(daySum);
}

spiceMustFlow(111)