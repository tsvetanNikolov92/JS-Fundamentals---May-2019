function stringManipulator(input) {
    let stringLine = input.shift();

    for (let currentLine of input) {
        if (currentLine === 'Done') {
            break;
        }

        let tokens = currentLine.split(' ');
        let command = tokens[0];

        if (command === 'Change') {
            let char = tokens[1];
            let replacement = tokens[2];

            change(char, replacement);
        } else if (command === 'Includes') {
            let strInclude = tokens[1];

            includes(strInclude);
        } else if (command === 'End') {
            let string = tokens[1];

            end(string);
        } else if (command === 'Uppercase') {
            uppercase(stringLine);
        } else if (command === 'FindIndex') {
            let char = tokens[1];

            findIndex(char);
        } else if (command === 'Cut') {
            let startIndex = Number(tokens[1]);
            let length = Number(tokens[2]);

            cut(startIndex, length);
        }
    }


    function change(char, replacement) {
        let regex = new RegExp(char, 'g');
        stringLine = stringLine.replace(regex, replacement);
        console.log(stringLine);
    }

    function includes(str) {
        let stringLineArr = stringLine;
        let isInclude = stringLineArr.includes(str);

        if (isInclude) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function end(string) {
        let isEndWithStr = stringLine.endsWith(string, string.length -1);

        if (isEndWithStr) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function uppercase(str) {
        let toUpperCase = str.toUpperCase();

        console.log(toUpperCase);
        stringLine = toUpperCase;
    }

    function findIndex(char) {
        let currentString = stringLine;
        let firstIndexOfChar = stringLine.indexOf(char);

        if (firstIndexOfChar !== -1) {
            console.log(firstIndexOfChar);
        }
    }

    function cut(startIndex, length) {
        let stringLineArr = [...stringLine];
        let newStringLine = stringLineArr.splice(startIndex, length);

        console.log(newStringLine.join(''));
    }
}

stringManipulator(
[
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done' 
]
)