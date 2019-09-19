function perfectNumber(number) {

    if (isPerfectNum(number)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
    
    function isPerfectNum() {
        let sum = 0;

        for (let i = 1; i <= number - 1; i++) {
            let currentNum = Number(i);
            
            if (number % currentNum === 0) {
                sum += currentNum;
            } 
        }
        if (sum === number) {
            return true;
        }

        return false;
    }
    
}

perfectNumber(1236498)