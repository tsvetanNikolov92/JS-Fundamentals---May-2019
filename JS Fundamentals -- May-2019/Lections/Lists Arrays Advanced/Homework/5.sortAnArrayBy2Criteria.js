function sortAnArrayBy2Criteria(input) {
    
    let sorted = input.sort(sortNames);
    console.log(sorted.join('\n'));

    function sortNames(a, b) {
        let firstCriteria = a.length - b.length;

        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }

        return firstCriteria;
    }
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"])