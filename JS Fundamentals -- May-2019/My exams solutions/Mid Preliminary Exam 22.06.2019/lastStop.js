function lastStop(input) {
    let paintNumList = input
        .shift()
        .split(' ');
    paintNumList = paintNumList.map(Number);

    let commandParser = {
        'Change': change,
        'Hide': hide,
        'Switch': switching,
        'Insert': insert,
        'Reverse': reverse
    };

    for (let line of input) {
        if (line === 'END') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();
        tokens = tokens.map(Number);

        commandParser[command](...tokens);
    }

    console.log(paintNumList.join(' '));


    function change(paintNum, changedNum) {
        let indexOfNum = paintNumList.indexOf(paintNum);

        if (indexOfNum !== -1) {
            paintNumList.splice(indexOfNum, 1, changedNum);
        }
    }

    function hide(paintNumber) {
        let indexOfPaintNum = paintNumList.indexOf(paintNumber);

        if (indexOfPaintNum !== -1) {
            paintNumList.splice(indexOfPaintNum, 1);
        }
    }

    function switching(firstPaintNum, secondPainNum) {
        let indexOfFirst = paintNumList.indexOf(firstPaintNum);
        let indexOfSecond = paintNumList.indexOf(secondPainNum);
        
        if (indexOfFirst !== -1 && indexOfSecond !== -1) {
            paintNumList[indexOfFirst] = secondPainNum;
            paintNumList[indexOfSecond] = firstPaintNum;
        }
    }

    function insert(place, paintingNumber) {
        place = Number(place) + 1;

        if (place >= 0 && place <= paintNumList.length - 1) {
            paintNumList.splice(place, 0, paintingNumber);
        }
    }

    function reverse() {
        let reversedPaintList = paintNumList.reverse();
        paintNumList = reversedPaintList;
    }
}

lastStop(
[
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END' 
]
)