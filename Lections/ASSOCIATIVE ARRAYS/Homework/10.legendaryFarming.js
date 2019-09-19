function legendaryFarming(input) {
    let lowerInput = input.toLowerCase();

    let junkItemsList = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };

    let splitedInput = lowerInput
        .split(' ');
    

    let legendaryItemsList = {
        'Shadowmourne' : 0,
        'Valanyr': 0,
        'Dragonwrath': 0
    }


    for (let i = 0; i < splitedInput.length; i+=2) {
        let keyQuantity = Number(splitedInput[i]);
        let material = splitedInput[i + 1];

        if (material === 'shards') {
            legendaryItemsList['Shadowmourne'] += keyQuantity;
            junkItemsList['shards'] += keyQuantity;
        } else if (material === 'fragments') {
            legendaryItemsList['Valanyr'] += keyQuantity;
            junkItemsList['fragments'] += keyQuantity;
        } else if (material === 'motes') {
            legendaryItemsList['Dragonwrath'] += keyQuantity;
            junkItemsList['motes'] += keyQuantity;
        } else {
            if (!junkItemsList.hasOwnProperty(material)) {
                junkItemsList[material] = keyQuantity;
            } else {
                junkItemsList[material] += keyQuantity;
            }
        }

        
        
        if (legendaryItemsList['Shadowmourne'] >= 250) {
            console.log('Shadowmourne obtained!');
            legendaryItemsList['Shadowmourne'] = 0;
            junkItemsList['shards'] -= 250;
        }

        if (legendaryItemsList['Dragonwrath'] >= 250) {
            console.log('Dragonwrath obtained!');
            legendaryItemsList['Dragonwrath'] = 0;
            junkItemsList['motes'] -= 250;
        }

        if (legendaryItemsList['Valanyr'] >= 250) {
            console.log('Valanyr obtained!');
            legendaryItemsList['Valanyr'] = 0;
            junkItemsList['fragments'] -= 250;
        }

    }

    let iterableJunkList = Object.entries(junkItemsList); 

    for (let [ material, value ] of iterableJunkList) {
        console.log(`${material} : ${value}`);
    }

}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')