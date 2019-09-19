function replaceRepeatingChars(singleStr) {
    let output = '';

    for (let i = 0; i < singleStr.length; i++) {
        let firstLetter = singleStr[i];
        let secondLetter = singleStr[i - 1];

        if (firstLetter !== secondLetter) {
            output += firstLetter;
        }
    }

    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');