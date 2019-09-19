function negativePositiveNum(arrOfNumEl) {
    let newArray = [];

    for (let currentEl of arrOfNumEl) {
        if (currentEl < 0) {
            newArray.unshift(currentEl);        
        } else {
            newArray.push(currentEl);
        }
    }
    console.log(newArray.join('\n'));
}

negativePositiveNum([7, -2, 8, 9])