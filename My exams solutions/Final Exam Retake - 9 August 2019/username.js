function username(input) {
    let usernameLine = input.shift();

    const caseLowOrUp = (command) => {
        let replacedLine = '';

        if (command === 'lower') {
            replacedLine = usernameLine.toLowerCase();
        } else if (command === 'upper') {
            replacedLine = usernameLine.toUpperCase();
        }
        usernameLine = replacedLine;

        console.log(replacedLine);
    }

    const reverseStr = (startIndex, endIndex) => {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (startIndex >= 0 && startIndex < endIndex) {
            if (endIndex <= usernameLine.length && endIndex > startIndex) {
                let reversedString = [];
                let newString = usernameLine.slice(startIndex, endIndex + 1);
                reversedString.push(newString);
                reversedString = reversedString[0]
                    .split('')
                    .reverse();
                console.log(reversedString.join(''));

            }
        }
    }

    const cutSubstr = (currSubstr) => {
        let isExist = usernameLine.includes(currSubstr);

        if (isExist) {
            let indexOfChar = usernameLine.indexOf(currSubstr);
            usernameLine = usernameLine.split('');
            usernameLine.splice(indexOfChar, currSubstr.length);
            console.log(usernameLine.join(''));
        } else {
            console.log(`The word ${usernameLine} doesn't contain ${currSubstr}.`);
        }
    }

    const replaceChar = (char) => {
        let regex = new RegExp(char, 'g');
        let replacedStrLine = usernameLine.replace(regex, '*');
        console.log(replacedStrLine);
        usernameLine = replacedStrLine;
    }

    const validChek = (char) => {
        let isValid = usernameLine.includes(char);

        if (isValid) {
            console.log('Valid');
        } else {
            console.log(`Your username must contain ${char}.`);
        }
    }

    let commandParser = {
        'Case': caseLowOrUp,
        'Reverse': reverseStr,
        'Cut': cutSubstr,
        'Replace': replaceChar,
        'Check': validChek
    }

    for (let line of input) {
        if (line === 'Sign up') {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens.shift();

        commandParser[command](...tokens);
    }
}

username(
[
    'ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up' 
]
)