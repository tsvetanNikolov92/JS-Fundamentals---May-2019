function modernTimes(singleStr) {
    let splitedStr = singleStr.split(' ');
    let isWordLetter = false;

    for (const word of splitedStr) {
        let isStartWithHash = word.startsWith('#');
        
        if  (isStartWithHash && word.length > 2) {
            let isLetterCounter = 0;

            for (let i = 1; i < word.length; i++) {
                let toLowerWord = word.toLowerCase();
                let currentLetter = toLowerWord.charCodeAt(i);
                
                if (currentLetter >= 97 && currentLetter <= 122) {
                    isLetterCounter++;
                }
            }
            if (isLetterCounter === word.length - 1) {
                isWordLetter = true;
            }
        }

        if (isWordLetter) {
            let subWord = word.substring(1);
            console.log(subWord);
            isWordLetter = false;
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')