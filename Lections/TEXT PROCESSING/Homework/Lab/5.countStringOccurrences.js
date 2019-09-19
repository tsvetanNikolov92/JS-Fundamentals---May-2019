function countStringOccurrences(text, occurrWord) {
    let occurrCount = 0;
    let splitedText = text
        .split(' ');

    for (let i = 0; i < splitedText.length; i++) {
        let word = splitedText[i];

        if (word === occurrWord) {
            occurrCount++;
        }
    }
    
    console.log(occurrCount);
}

countStringOccurrences(
    "This is a word and it also is a sentence",
    "is"
)