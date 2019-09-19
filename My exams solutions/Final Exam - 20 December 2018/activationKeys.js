function activationKeys(input) {
    let finalKey = [];
    let dividedLine = '';
    let splitedInput = input[0]
        .split('&')
    
    for(let line of splitedInput) {
        let isInvalid = /[\W]+/g.test(line)
        let isValid = false;
        
        if (!isInvalid) {
            if (line.length === 16 || line.length === 25) {
                isValid = true;
            }
        } else {
            continue;
        }
        
        if (isValid) {
            if (line.length === 25) { 
                dividedLine = divideToFive(line);
            } else {
                dividedLine = divideToFour(line);
            }
        }
        
        let toUpperCaseStr = dividedLine.toUpperCase();
        dividedLine = toUpperCaseStr;
        let validKey = replaceDigit(dividedLine);
        
        finalKey.push(validKey);
    }

    console.log(finalKey.join(', '));
    
    function divideToFive(line) {
        let currentDivideLine = '';

        for (let i = 1; i <= line.length; i++) {
            let currentLetter = line[i - 1];
            currentDivideLine += currentLetter;

            if (i % 5 === 0) {
                if (i !== 25) {
                    currentDivideLine += '-';
                }
            }
        }

        return currentDivideLine;
    }
 
    function divideToFour(line) {
        let currentDivideLine = '';

        for (let i = 1; i <= line.length; i++) {
            let currentLetter = line[i- 1];
            currentDivideLine += currentLetter;

            if (i !== line.length) {
                if (i % 4 === 0) {
                    currentDivideLine += '-';
                }
            } 
        }

        return currentDivideLine;
    }
    
    function replaceDigit(dividedLine) {
        let splitedLine = dividedLine.split('-');
        let finalKey = '';

        for (let i = 0; i < splitedLine.length; i++) {
            let currentGroup = splitedLine[i];

            for (let j = 0; j < currentGroup.length; j++) {
               let currentChar = Number(currentGroup[j]); 

               if (!isNaN(currentChar)) {
                   let newDigit = 9 - currentChar;
                   finalKey += newDigit;
               } else {
                   finalKey += currentGroup[j];
               }
            }

            if (i !== splitedLine.length - 1) {
                finalKey += '-';
            }  
        }

        return finalKey;
    }
    
}

activationKeys(
[ 
    'xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS' 
]
)