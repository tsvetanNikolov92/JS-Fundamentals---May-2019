function pascalCaseSplitter(singleStr) {
    const isUpperCase = (symbol) => {
        return symbol.toUpperCase() === symbol;
    };

    let words = [];

    let currentWord = singleStr[0];
    for (let i = 1; i < singleStr.length; i++) {
        if (isUpperCase(singleStr[i])) {
            words.push(currentWord);
            currentWord = singleStr[i];
        } else {
            currentWord += singleStr[i];
        }
    }
    words.push(currentWord);
    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')