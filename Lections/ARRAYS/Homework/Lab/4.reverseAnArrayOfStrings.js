function reverseAnArrayOfStrings(input) {
    let output = '';

    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i] + ' ';
    }

    console.log(output);
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])