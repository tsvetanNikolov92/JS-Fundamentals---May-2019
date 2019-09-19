function concert(input) {
    let bandList = {};
    let playTimeList = {};
    let bandToPrint = input.pop();
    let totalTime = 0; 

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];

        if (currentLine === 'start of concert') {
            console.log(`Total time: ${totalTime}`);
            let sortedBands = Object.entries(playTimeList)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            
            for (let [ bandName, time ] of sortedBands) {
                console.log(`${bandName} -> ${time}`);
            }
            
            console.log(`${bandToPrint}`);
            let toPrintMembers = bandList[bandToPrint];

            for (let currMember of toPrintMembers) {
                console.log(`=> ${currMember}`);
            }
        } else {
            [ command, bandName, time ] = currentLine.split('; ');
            
            if (command === 'Add') {
                let members = time.split(', ');
                
                if (!bandList.hasOwnProperty(bandName)) {
                    bandList[bandName] = [];
                }

                for (let member of members) {
                    if (!bandList[bandName].includes(member)) {
                        bandList[bandName].push(member);
                    }
                }
            } else if (command === 'Play') {
                let playTime = Number(time);

                if (!playTimeList.hasOwnProperty(bandName)) {
                    playTimeList[bandName] = playTime;
                } else {
                    playTimeList[bandName] += playTime;
                }
                totalTime += playTime;
            }   
        }
    }
}

concert(
[
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]
)