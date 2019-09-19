function printNthElement(arrOfString) {
    let ntheStep = arrOfString[arrOfString.length - 1];
    let output = '';
    ntheStep = Number(ntheStep);

    for (let i = 0; i < arrOfString.length - 1; i+= ntheStep) {
        let currentEl = arrOfString[i];
        output += `${currentEl} `;
    }
    console.log(output);
}

printNthElement(['5', '20', '31', '4', '20', '2'])