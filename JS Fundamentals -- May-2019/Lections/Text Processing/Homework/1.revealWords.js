function revealWords(searchedWordsStr, text) {
    let words = searchedWordsStr.split(', ');

    words
        .forEach((word) => {
            text = text.replace('*'.repeat(word.length), word);
        });
    console.log(text);
}

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
)