function repeatString(string, countN) {
    let output = "";

    for (let i = 0; i < countN; i++) {
        output += string;
    }
    return output;
}

console.log(repeatString("abc", 3))