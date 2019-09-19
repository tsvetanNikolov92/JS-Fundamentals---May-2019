function stringSubstring(searchWord, text) {
    let findingWord = 0;
    let splitedText = text
        .toLowerCase()
        .split(' ');

    for (let word of splitedText) {
        if (word === searchWord) {
            findingWord++;
            console.log(word);
        }
    }
    if (findingWord === 0) {
        console.log(`${searchWord} not found!`);
    }
}

stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
)