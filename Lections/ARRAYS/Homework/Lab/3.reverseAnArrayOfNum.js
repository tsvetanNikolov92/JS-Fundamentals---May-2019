function reverseAnArrayOfNum(n, input) {
    let output = ''
    for (let i = n - 1; i >= 0; i--) {
        output += input[i] + ' '
    }
    console.log(output)
}

reverseAnArrayOfNum(3, [10, 20, 30, 40, 50])