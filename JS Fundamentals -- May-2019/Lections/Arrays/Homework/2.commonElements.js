function solve(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        let currentEl = firstArr[i];

        for (let j = 0; j < secondArr.length; j++) {
            let nextEl = secondArr[j];
            
            if (currentEl === nextEl) {
                console.log(nextEl);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])