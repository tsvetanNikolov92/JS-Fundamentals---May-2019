function arrivInKathman(input) {
    let peakName = '';
    let geohashCode = '';

    for (let line of input) {
        let pattern = /^([\!\@\?\#\$a-zA-Z\d]+)\=([\d]+)\<\<([\w\W]+)$/g;
        let isValid = pattern.exec(line);
        
        if (line === 'Last note') {
            break;
        }
        
        if (isValid !== null) {
            let geoCodeLength = isValid[3].length;
            let digit = Number(isValid[2]);

            if (geoCodeLength === digit) { 
                geohashCode += isValid[3];
                findName(isValid[1]);
                console.log(`Coordinates found! ${peakName} -> ${geohashCode}`);
                peakName = '';
                geohashCode = '';
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
   
  
    function findName(text) {
        let namePattern = /([a-zA-Z\d]+)/g;
        let matches = namePattern.exec(text);

        while (matches !== null) {
           peakName += matches[0];
           matches = namePattern.exec(text); 
        }
    } 
}

arrivInKathman(
[
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note' 
]
)