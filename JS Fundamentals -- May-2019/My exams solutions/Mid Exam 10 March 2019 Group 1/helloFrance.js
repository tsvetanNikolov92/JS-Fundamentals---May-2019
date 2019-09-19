function helloFrance(input) {
    let itemsList = [];
    let budget = Number(input.pop());
    let splitedInput = input[0].split('|');
    let maxClothesPrice = 50;
    let maxShoesPrice = 35;
    let maxAccessPrice = 20.50;
    let ticketPrice = 150;
    let profit = 0;
    
    const clothesBuy = (price) => {
        let isHaveMoney = budget - price;

        if (isHaveMoney > 0) {
           if (price <= maxClothesPrice ) {
               budget -= price;
               itemsList.push(price.toFixed(2));
           }
        } 
    }

    const shoesBuy = (price) => {
        let isHaveMoney = budget - price;

        if (isHaveMoney >= 0) {
            if (price <= maxShoesPrice) {
                budget -= price;
                itemsList.push(price.toFixed(2));
            }
        }
    };

    const accessBuy = (price) => {
        let isHaveMoney = budget - price;

        if (isHaveMoney >= 0) {
            if (price <= maxAccessPrice) {
                budget -= price;
                itemsList.push(price.toFixed(2));
            }
        }
    };

    let commandParser = {
        'Clothes': clothesBuy,
        'Shoes': shoesBuy,
        'Accessories': accessBuy
    };

    for (let line of splitedInput) {
        let tokens = line.split('->');
        let command = tokens.shift();
        let itemPrice = Number(tokens[0]);

        if (budget <= 0) {
            break;
        }

        commandParser[command](itemPrice);
    }

    let resultValueItems = 0;
    let increasedValueItems = 0;
    itemsList = itemsList.map(Number);

    for (let i = 0; i < itemsList.length; i++) {
        resultValueItems += itemsList[i]; 
        itemsList[i] = (itemsList[i] * 1.4);
        increasedValueItems += itemsList[i];
    }

    itemsList = itemsList.map(n => n.toFixed(2));
    profit = increasedValueItems - resultValueItems;
    console.log(`${itemsList.join(' ')}`);
    console.log(`Profit: ${profit.toFixed(2)}`);
    
    let isTicketMoney = (increasedValueItems + budget) - ticketPrice;

    if (isTicketMoney >= 0) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}

helloFrance([ 'Shoes->41.20|Clothes->30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60','90']);