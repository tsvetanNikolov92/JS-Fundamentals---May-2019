function censoredWords(sentence, occurWord) {
    let counter = 0
    let copySentence = sentence
        .substring(0);
    
    for (let currentWord of sentence) {
        let indexOfWord = copySentence
            .indexOf(occurWord);
        let wordLength = occurWord.length;
        
        if (indexOfWord !== -1) {
            copySentence = copySentence
                .replace(new RegExp(occurWord, 'g'), '*'
                .repeat(wordLength));
        }
        counter++

        if (counter === sentence.length) {
            break;
        }
    }
    console.log(copySentence);
}

censoredWords("A small sentence with some words", "small")