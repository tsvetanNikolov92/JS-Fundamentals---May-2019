function oddOccurrences(sentence) {
    let lowerSentence = sentence.toLowerCase();
    let splitedSentence = lowerSentence
            .split(' ')
    
    let elementCount = {};
    let output = [];

    for (let element of splitedSentence) {
        elementCount[element] = 0;
    }

    for (let currentEl of splitedSentence) {
        if (elementCount.hasOwnProperty(currentEl)) {
            elementCount[currentEl]++;
        }
    }

    let iteratorElement = Object.entries(elementCount);

    for (let [key, keyValue] of iteratorElement) {
        if (keyValue % 2 !== 0) {
            output.push(key);
        }
    }

    console.log(output.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')