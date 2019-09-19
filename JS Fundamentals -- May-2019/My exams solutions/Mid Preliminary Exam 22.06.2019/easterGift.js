function easterGift(input) {
    let giftsPlanList = input
        .shift()
        .split(' ');

    const outOfStock = (gift) => {
        for (let line of giftsPlanList) {
            let indexOfGift = giftsPlanList.indexOf(gift);

            if (indexOfGift !== -1) {
                giftsPlanList.splice(indexOfGift, 1, 'None');
            }
        }
        
    }

    const required = (gift, index) => {
        index = Number(index);

        if (index >= 0 && index <= giftsPlanList.length - 1) {
            giftsPlanList.splice(index, 1, gift);
        }
    }

    const justInCase = (gift) => {
        giftsPlanList.splice(giftsPlanList.length - 1, 1, gift);
    }

    let commandParser = {
        'OutOfStock': outOfStock,
        'Required': required,
        'JustInCase': justInCase        
    };

    for (let line of input) {
        if (line === 'No Money') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        commandParser[command](...tokens);
    }
    let filteredList = giftsPlanList.filter((gift) => gift !== 'None')
    console.log(filteredList.join(' '));
}

easterGift(
[ 
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money' 
]
)