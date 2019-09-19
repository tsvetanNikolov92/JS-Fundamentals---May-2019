function loadingBar(singleNum) {
    let convertSingleNum = singleNum / 10;
    let output = '';
    let asciiSymbolPercent = String.fromCharCode(37);
    let asciiSymbolDot = String.fromCharCode(46);


    for (let i = 0; i < convertSingleNum; i++) {
        output += asciiSymbolPercent;
    }

    if (singleNum < 100) {
        let diff = 100 - singleNum;
        let convertDiff = diff / 10;

        console.log(`${singleNum}% [${output}${asciiSymbolDot.repeat(convertDiff)}]`);
        console.log("Still loading...");
    } else {
        console.log('100% Complete!');
        console.log(`[${output}]`);
    }
}

loadingBar(100)