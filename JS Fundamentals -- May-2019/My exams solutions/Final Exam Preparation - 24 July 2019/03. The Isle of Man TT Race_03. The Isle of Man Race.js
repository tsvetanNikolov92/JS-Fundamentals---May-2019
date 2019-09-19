function theIsleRace(input) {
    for (let line of input) {
        let pattern = /^([#$%*&])([A-Za-z]+)\1=(\d+)!!([\w\W]*?)$/g;
        let tokens = pattern.exec(line);
        let geohashCode = '';

        if (tokens !== null) {
            let isValidLength = Number(tokens[3]);
            let coordinate = tokens[4];

            if (isValidLength === tokens[4].length) {
                for (let char of coordinate) {
                    let asciiCode = char.charCodeAt(0);
                    asciiCode += isValidLength;
                    let geohashChar = String.fromCharCode(asciiCode);
                    geohashCode += geohashChar;
                }
                console.log(`Coordinates found! ${tokens[2]} -> ${geohashCode}`);
                break;
            }
        } else {
            console.log('Nothing found!');
            continue;
        }

        if (geohashCode === '') {
            console.log('Nothing found!');
        }  
    }
}

theIsleRace(
[
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S' 
]
)