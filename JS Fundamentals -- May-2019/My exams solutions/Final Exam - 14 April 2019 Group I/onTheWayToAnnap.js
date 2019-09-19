function onTheWayToAnnap(input) {
    let storesList = {};

    for (let line of input) {
        let tokens = line.split('->');
        let command = tokens.shift();

        if (command === 'END') {
            break;
        }
        
        if (command === 'Remove') {
            let removeStoreName = tokens.shift();

            removeStore(removeStoreName);
            continue;
        }
        
        let itemsLine = tokens[1].split(',');

        if (command === 'Add') {
            if (itemsLine.length > 1) {
                let storeName = tokens[0];
                let itemsList = itemsLine;
    
                addMoreItems(storeName, itemsList);
            } else {
                let storeName = tokens[0];
                let currItem = itemsLine;

                addStoreAndItem(storeName, currItem);
            }
        }    
    }

    let sortedStore = Object.entries(storesList)
        .sort((a, b) => b[1].length - a[1].length || b[0].length - a[0].length);
    
    console.log('Stores list:');
    
    for (let [ storeName, items ] of sortedStore) {
        console.log(`${storeName}`);
        if (items.length > 1) {
            let storeItems = items;

            for (let currItem of storeItems) {
                console.log(`<<${currItem}>>`);
            }
        } else {
            console.log(`<<${items}>>`);
        }
    }

    function addStoreAndItem(storeName, itemName) {
        if (!storesList.hasOwnProperty(storeName)) {
            storesList[storeName] = itemName;
        } else {
            let itemsInStore = storesList[storeName];

            if (!itemsInStore.includes(itemName)) {
                storesList[storeName].push(itemName);
            }
        }
    }

    function addMoreItems(storeName, itemsList) {
        let itemsInList = itemsList;
        
        if (!storesList.hasOwnProperty(storeName)) {
            storesList[storeName] = itemsList;
        } else {
            for (let currItem of itemsInList) {
                if (!storesList[storeName].includes(currItem)) {
                   storesList[storeName].push(currItem); 
                }
            }
        }
        
    }

    function removeStore(storeName) {
        if (storesList.hasOwnProperty(storeName)) {
            delete storesList[storeName];
        }
    }
}

onTheWayToAnnap(
[ 
    'Add->Peak->Waterproof,Umbrella',
    'END' 
]
)