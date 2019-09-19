function vaporWinterSale(input) {
    let splitedInput = input[0].split(', ')
    let gameList = {};
    let gameWithDlcList = {};

    for (let currentGame of splitedInput) {
        add(currentGame);
    }

    
    for (let [name, ] of Object.entries(gameList)) {
        if (!gameWithDlcList.hasOwnProperty(name)) {
            gameList[name] *= 0.80;
        } else {
            gameList[name] *= 0.50;
        }
    }

    let sortedGamesWithDlc = Object.entries(gameWithDlcList)
        .sort(sortGamesWithDlc);

    let sortedGamesWithoutDlc = Object.entries(gameList)
        .sort(sortGamesWithoutDlc)
    
    for (let line of Object.entries(sortedGamesWithDlc)) {
        let currentLine = line[1];
        let gameName = currentLine[0];
        let value = currentLine[1];

        if (gameWithDlcList.hasOwnProperty(gameName)) {
            console.log(`${gameName} - ${value} - ${gameList[gameName].toFixed(2)}`);
        }  
    }

    for (let line of Object.entries(sortedGamesWithoutDlc)) {
        let currentLine = line[1];
        let name = currentLine[0];
        let value = currentLine[1];

        if (!gameWithDlcList.hasOwnProperty(name)) {
            console.log(`${name} - ${value.toFixed(2)}`);
        }
    }

    function add(currentGame) {
        let tokens = currentGame.split('-');

        if (tokens.length > 1) {
            let gameName = tokens[0];
            let price = Number(tokens[1]);
            
            if (!gameList.hasOwnProperty(gameName)) {
                gameList[gameName] = price;
            } 
        } else {
            let splitedName = tokens[0].split(':');
            let gameWithDlcName = splitedName[0];
            let dlcContent = splitedName[1];

            if (gameList.hasOwnProperty(gameWithDlcName)) {
                if (!gameWithDlcList.hasOwnProperty(gameWithDlcName)) {
                    gameWithDlcList[gameWithDlcName] = dlcContent;
                    gameList[gameWithDlcName] *= 1.20;
                }
            }
        }
    }

    function sortGamesWithDlc(a, b) {
        let aGamePrice = gameList[a[0]];
        let bGamePrice = gameList[b[0]];

        let result = aGamePrice - bGamePrice;

        return result;
    }

    function sortGamesWithoutDlc(a, b) {
        let aGamePrice = a[1];
        let bGamePrice = b[1];

        let result = bGamePrice - aGamePrice;

        return result;
    }
}

vaporWinterSale(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT'])